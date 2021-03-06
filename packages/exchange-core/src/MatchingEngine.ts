import { IDeviceTypeService, ILocationService } from '@energyweb/utils-general';
import BN from 'bn.js';
import { List } from 'immutable';
import { Subject } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { Ask } from './Ask';
import { Bid } from './Bid';
import { DirectBuy } from './DirectBuy';
import { Order, OrderSide } from './Order';
import { ProductFilter } from './ProductFilter';
import { Trade } from './Trade';

export enum ActionResult {
    Cancelled,
    Error
}

export type TradeExecutedEvent = { trade: Trade; ask: Ask; bid: Bid | DirectBuy };

export type ActionResultEvent = { orderId: string; result: ActionResult; error?: string };

enum ActionKind {
    AddOrder,
    AddDirectBuy,
    CancelOrder
}

type OrderBookAction = { kind: ActionKind; value: Order | DirectBuy | string };

export class MatchingEngine {
    private bids: List<Bid> = List<Bid>();

    private asks: List<Ask> = List<Ask>();

    private readonly triggers = new Subject();

    public trades = new Subject<List<TradeExecutedEvent>>();

    public actionResults = new Subject<List<ActionResultEvent>>();

    private pendingActions = List<OrderBookAction>();

    constructor(
        private readonly deviceService: IDeviceTypeService,
        private readonly locationService: ILocationService
    ) {
        this.triggers.pipe(concatMap(async () => this.trigger())).subscribe();
    }

    public submitOrder(order: Ask | Bid) {
        this.pendingActions = this.pendingActions.concat({
            kind: ActionKind.AddOrder,
            value: order
        });
    }

    public submitDirectBuy(directBuy: DirectBuy) {
        this.pendingActions = this.pendingActions.concat({
            kind: ActionKind.AddDirectBuy,
            value: directBuy
        });
    }

    public cancelOrder(orderId: string) {
        this.pendingActions = this.pendingActions.concat({
            kind: ActionKind.CancelOrder,
            value: orderId
        });
    }

    public orderBook() {
        const now = new Date();
        const validFromFilter = (order: Order) => order.validFrom <= now;

        return {
            asks: this.asks.filter(validFromFilter),
            bids: this.bids.filter(validFromFilter)
        };
    }

    public orderBookByProduct(productFilter: ProductFilter) {
        const { asks, bids } = this.orderBook();

        const filteredAsks = asks.filter((ask) =>
            ask.filterBy(productFilter, this.deviceService, this.locationService)
        );
        const filteredBids = bids.filter((bid) =>
            bid.filterBy(productFilter, this.deviceService, this.locationService)
        );

        return { asks: filteredAsks, bids: filteredBids };
    }

    public tick() {
        this.triggers.next();
    }

    private insertOrder(order: Order) {
        if (order.side === OrderSide.Ask) {
            this.asks = this.insert(this.asks, order as Ask);
        } else {
            this.bids = this.insert(this.bids, order as Bid);
        }
    }

    private trigger() {
        const actions = this.pendingActions;

        let trades = List<TradeExecutedEvent>();
        let statusChange = List<ActionResultEvent>();

        actions.forEach((action) => {
            switch (action.kind) {
                case ActionKind.AddOrder: {
                    try {
                        const order = action.value as Order;

                        this.insertOrder(order);
                        trades = trades.concat(this.match());
                    } catch (error) {
                        console.log(error);
                    }
                    break;
                }
                case ActionKind.CancelOrder: {
                    try {
                        const id = action.value as string;
                        const cancelEvent = this.cancel(id);

                        statusChange = statusChange.concat(cancelEvent);
                    } catch (error) {
                        console.log(error);
                    }

                    break;
                }
                case ActionKind.AddDirectBuy: {
                    const directBuy = action.value as DirectBuy;
                    try {
                        const trade = this.directBuy(directBuy);

                        trades = trades.concat(trade);
                    } catch (error) {
                        const notExecutedEvent: ActionResultEvent = {
                            orderId: directBuy.id,
                            result: ActionResult.Error,
                            error: error.msg
                        };
                        statusChange = statusChange.concat(notExecutedEvent);
                    }
                    break;
                }
                default:
                    throw new Error('Unexpected action');
            }
        });

        this.cleanOrderBook();
        this.pendingActions = this.pendingActions.clear();

        if (!trades.isEmpty()) {
            this.trades.next(trades);
        }
        if (!statusChange.isEmpty()) {
            this.actionResults.next(statusChange);
        }
        return true;
    }

    private insert<T extends Order>(orderBook: List<T>, order: T) {
        const unSorted = orderBook.concat(order);
        const direction = order.side === OrderSide.Ask ? 1 : -1;

        return unSorted.sortBy((o) => direction * o.price);
    }

    private directBuy(bid: DirectBuy): TradeExecutedEvent {
        const ask = this.asks.find((o) => o.id === bid.askId);

        if (ask.userId === bid.userId) {
            throw new Error(
                `Unable to direct buy your own bid: bid=${JSON.stringify(bid)} ask=${JSON.stringify(
                    ask
                )}`
            );
        }
        if (ask.volume.lt(bid.volume)) {
            throw new Error(
                `Remaining volume is too low: ask.volume=${ask.volume.toString(
                    10
                )} bid.volume=${bid.volume.toString(10)}`
            );
        }
        if (ask.price !== bid.price) {
            throw new Error('Unexpected price change');
        }

        const tradedVolume = bid.volume;
        const updatedAsk = ask.updateWithTradedVolume(bid.volume);
        const updatedBid = bid.updateWithTradedVolume(bid.volume);

        this.asks = this.updateOrder(this.asks, updatedAsk);

        const trade = new Trade(updatedBid, updatedAsk, tradedVolume, bid.price);

        return { trade, ask: updatedAsk, bid: updatedBid };
    }

    private match() {
        const { bids, asks } = this.orderBook();
        const executed = this.generateTrades(asks, bids);
        this.updateOrderBook(executed);

        return executed;
    }

    private cancel(orderId: string): ActionResultEvent {
        const asks = this.findAndRemove(this.asks, orderId);
        if (asks.result) {
            this.asks = asks.modified;
        } else {
            const bids = this.findAndRemove(this.bids, orderId);
            if (bids.result) {
                this.bids = bids.modified;
            } else {
                throw new Error('Unexpected orderId');
            }
        }

        return {
            orderId,
            result: ActionResult.Cancelled
        };
    }

    private findAndRemove<T extends Order>(
        source: List<T>,
        orderId: string
    ): { result: boolean; modified?: List<T> } {
        const key = source.findKey((o) => o.id === orderId);

        return key !== undefined
            ? { result: true, modified: source.remove(key) }
            : { result: false };
    }

    private updateOrder<T extends Order>(source: List<T>, order: T) {
        return source.set(
            source.findIndex((o) => o.id === order.id),
            order
        );
    }

    private updateOrderBook(matched: List<TradeExecutedEvent>) {
        matched.forEach((m) => {
            this.asks = this.updateOrder(this.asks, m.ask);
            this.bids = this.updateOrder(this.bids, m.bid);
        });
    }

    private cleanOrderBook() {
        this.asks = this.asks.filterNot((ask) => ask.isFilled);
        this.bids = this.bids.filterNot((bid) => bid.isFilled);
    }

    private generateTrades(asks: List<Ask>, bids: List<Bid>) {
        let executed = List<TradeExecutedEvent>();

        bids.forEach((bid) => {
            asks.forEach((ask) => {
                const isMatching = this.matches(bid, ask);
                if (!isMatching) {
                    return true;
                }

                const filled = BN.min(ask.volume, bid.volume);

                ask.updateWithTradedVolume(filled);
                bid.updateWithTradedVolume(filled);

                executed = executed.concat({
                    trade: new Trade(bid, ask, filled, ask.price),
                    ask,
                    bid
                });

                return true;
            });
        });

        return executed;
    }

    private matches(bid: Bid, ask: Ask) {
        const hasProductMatched = bid.matches(ask, this.deviceService, this.locationService);
        const hasAskVolume = !ask.volume.isNeg() && !ask.volume.isZero();
        const hasBidVolume = !bid.volume.isNeg() && !bid.volume.isZero();

        const hasPriceMatched = ask.price <= bid.price;
        const sameOwner = bid.userId === ask.userId;

        return hasPriceMatched && hasAskVolume && hasBidVolume && hasProductMatched && !sameOwner;
    }
}
