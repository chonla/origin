# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [5.1.0](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@5.0.1...@energyweb/origin-backend@5.1.0) (2020-05-15)


### Bug Fixes

* fixate tslib version to 1.11.2 to avoid typeorm issue ([274d4e9](https://github.com/energywebfoundation/origin/commit/274d4e9717f4c8f4b258a56331724330dcc3685b))
* store [] as the default for device.files ([52e5fcc](https://github.com/energywebfoundation/origin/commit/52e5fccdeb303133b3db9413fc317e4a1c60ebca))
* **origin-backend:** add default to status and kycstatus for user ([afc397f](https://github.com/energywebfoundation/origin/commit/afc397f37441af389666b865c088927cf0c22444))
* **origin-backend:** add files default ([f7a265b](https://github.com/energywebfoundation/origin/commit/f7a265bd268201289d93788d310131ebc2ea56e9))
* **origin-backend:** add nullable:false to user statuses ([090e29b](https://github.com/energywebfoundation/origin/commit/090e29b6791b47b20a702bd0f4120236b59a83b1))
* **origin-backend:** apply ownership to certificate requests ([75408ea](https://github.com/energywebfoundation/origin/commit/75408ead45f0bf508c742975528787efa20b8db7))
* **origin-backend:** configuration not being initialized in the tests ([2bff1f0](https://github.com/energywebfoundation/origin/commit/2bff1f087d353fbdfabb9022fccf2b07c12f105c))
* **origin-backend:** don't run watcher service if the Issuer address is incorrect ([278bcca](https://github.com/energywebfoundation/origin/commit/278bcca8e1bd4cb27e60f9a02351ac430e00df90))
* **origin-backend:** fix e2e test checking if certified ([b319b2c](https://github.com/energywebfoundation/origin/commit/b319b2cbba8f4cccd4f2d4154a4cbd13bfe7e099))
* **origin-backend:** fix getting certification request ([f1d766f](https://github.com/energywebfoundation/origin/commit/f1d766f0fea9e38b8fd869904818f82b09817a15))
* **origin-backend:** fix issues with registering/approving devices ([9a5e066](https://github.com/energywebfoundation/origin/commit/9a5e066298d5c949f840dc09b8b098b6ce31e50c))
* **origin-backend:** migration dropping column ([00220b8](https://github.com/energywebfoundation/origin/commit/00220b800a8e5353aea4d6de1709c8e8a20e4d30))
* **origin-backend:** smReads - calculating if certified or not ([2a9a01e](https://github.com/energywebfoundation/origin/commit/2a9a01e4d09a8a683214630dac1214c426f4f67d))


### Features

* add meterStats to Device for un/certified meter readings reference ([627d785](https://github.com/energywebfoundation/origin/commit/627d7855506f52cb70ee083844ef2664b9227a0b))
* Detect and store the whole CertificationRequest on the backend ([613eb28](https://github.com/energywebfoundation/origin/commit/613eb28eeae25ec414b393f61311dbfb679351d4))
* register Approved and Revoked events ([e74afec](https://github.com/energywebfoundation/origin/commit/e74afec51924a37abe39cad94e416f955474f17b))
* **origin-backend:** added automatic post for sale flag, API for updating settings ([a871f60](https://github.com/energywebfoundation/origin/commit/a871f601ea611ca5e51fbe7cd0d0b0fcf4d2cea3))
* **origin-backend:** price per device asset. initial e2e setup ([8479b5e](https://github.com/energywebfoundation/origin/commit/8479b5efc7e3cdba2e6f61eb6d62cb8ed4814526))





## [5.0.1](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@5.0.0...@energyweb/origin-backend@5.0.1) (2020-04-24)


### Bug Fixes

* **deps:** update dependency class-validator to v0.12.1 ([b5000af](https://github.com/energywebfoundation/origin/commit/b5000af21eb1bc8e1df1eb85cac636cfe5e31adc))
* **deps:** update dependency ts-loader to v7 ([722101a](https://github.com/energywebfoundation/origin/commit/722101a02d82ea125f011de23cd1232e82e7db47))
* **deps:** update nest monorepo to v7.0.8 ([67e8239](https://github.com/energywebfoundation/origin/commit/67e823940e8c671790acbd106af0dc479ec9c23d))
* **origin-backend:** device update ([1cd631b](https://github.com/energywebfoundation/origin/commit/1cd631b38452a1b42f78d28f07348b04ce100e7b))
* **origin-backend:** fix init ([1306a7e](https://github.com/energywebfoundation/origin/commit/1306a7e9c51c537a7e39f63ed56724a82ab1df4b))
* **origin-backend:** fix storing the smart meter reads ([560f1dd](https://github.com/energywebfoundation/origin/commit/560f1ddd1b14c24f8ed9d02eca7d6d344fc29277))
* **origin-backend:** registration ([dffbf50](https://github.com/energywebfoundation/origin/commit/dffbf509fc34fbc247170628a76ed2e02e4b6765))
* **origin-backend:** use repositry.save(enityt) instead of entity.save() ([2f34ca0](https://github.com/energywebfoundation/origin/commit/2f34ca042cc292be46526e555ed49b0fcc4a63e0))
* all energy references to BigNumber ([9265556](https://github.com/energywebfoundation/origin/commit/926555616e2f88dbc6ef824e05becce4d64148e3))
* bin env for migration scripts ([aef836e](https://github.com/energywebfoundation/origin/commit/aef836e0e263076c3bdb6fafb5335a595af9d519))
* migration catalog ([48209a1](https://github.com/energywebfoundation/origin/commit/48209a1357d82e85c0c6a330bde62669dcb98844))
* migrations path fix ([54b4c67](https://github.com/energywebfoundation/origin/commit/54b4c67aec30a2ca469b1218bc824eb66050abc7))
* store certificate energy as a string (maximum 2^256-1) ([2a284a9](https://github.com/energywebfoundation/origin/commit/2a284a9ff3b362dfa41516995b1cadd4c5651194))
* **origin-backend-app:** fix inconsistent build process ([6795770](https://github.com/energywebfoundation/origin/commit/6795770702f1fa52260c9a1c4a6631b2be7ffb05))





# [5.0.0](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@4.0.0...@energyweb/origin-backend@5.0.0) (2020-04-08)


### Bug Fixes

* **deps:** update dependency @nestjs/config to v0.4.0 ([e7ac62d](https://github.com/energywebfoundation/origin/commit/e7ac62d728b854cb95b5c9293bc0be70d66aa0f8))
* **deps:** update dependency @nestjs/jwt to v7 ([143fb82](https://github.com/energywebfoundation/origin/commit/143fb82ad08423e05fd4ccd25926cb30c0caa4ff))
* **deps:** update dependency @nestjs/passport to v7 ([be26821](https://github.com/energywebfoundation/origin/commit/be268216980b5b1119638ddae039022aa8e9790a))
* **deps:** update dependency class-validator to v0.11.1 ([5607f1c](https://github.com/energywebfoundation/origin/commit/5607f1cb3ef09e7838ac8fcd4e72538e65bf514e))
* **deps:** update dependency rxjs to v6.5.5 ([2c19e39](https://github.com/energywebfoundation/origin/commit/2c19e39552b2e68a91db9fc8b21127488a9cd576))
* **origin-backend:** fix displaying uploaded files ([97bc31c](https://github.com/energywebfoundation/origin/commit/97bc31cb93cd27e15e7c6a19ee1e90409c2d87a9))
* **origin-backend:** fix saving user settings ([04b5361](https://github.com/energywebfoundation/origin/commit/04b53613aec909e75f1107e6d9dc07c0d27e0b48))
* **origin-backend:** store certificate energy as BigInt ([cbaf676](https://github.com/energywebfoundation/origin/commit/cbaf676b9725d82bdbf5a177cb495afe9710ede4))
* **origin-ui-core:** display notification when users tries to register device without organization ([ff4e0a4](https://github.com/energywebfoundation/origin/commit/ff4e0a44bc5c88f1028699872143a9a8e69c9163))
* adjust application to off-chain device registry ([a3583fb](https://github.com/energywebfoundation/origin/commit/a3583fb6c80604c88ef69724c69229a74320ff95))
* don't drop schema when run:origin ([57ca815](https://github.com/energywebfoundation/origin/commit/57ca8151bd27555c17031556b5980213d476cea9))
* enable editing account settings ([b058828](https://github.com/energywebfoundation/origin/commit/b058828cafe8e07f0d5b921f8d0c59efc4f67ee7))
* make ContractsLookup part of Configuration ([4fe28c4](https://github.com/energywebfoundation/origin/commit/4fe28c4a79dc17658b067d519c6f0288a6243198))
* remove MarketUser from UI ([9d15489](https://github.com/energywebfoundation/origin/commit/9d15489fa976fb9861337de0b8cbc56a06477203))
* working exchange integration ([49ced59](https://github.com/energywebfoundation/origin/commit/49ced5996c4198fcbf43b8e0eeaf978182ba3a47))


### chore

* **device-registry:** remove all off-chain components ([d11c834](https://github.com/energywebfoundation/origin/commit/d11c83486a89eab252a88dcf79054383f9ea5152))


### Features

* **origin-backend:** add grid operators ([247a179](https://github.com/energywebfoundation/origin/commit/247a17950ebe917fbf82ecb0dcd25a47caddcc57))
* add ability to autogenerate external device ids ([822b752](https://github.com/energywebfoundation/origin/commit/822b7523730b726aeb2f7f09922d1742f3faa075))
* add ORGANIZATION_REMOVED_MEMBER and DEVICE_STATUS_CHANGED email notifications ([384f90f](https://github.com/energywebfoundation/origin/commit/384f90fa18bf9ee7a38648afa28de95ca7f64071))
* add posting certificates for sale ([84a141a](https://github.com/energywebfoundation/origin/commit/84a141a9868102f1d012170926c2439069716783))
* **issuer:** approval process for private transfers ([b285bfd](https://github.com/energywebfoundation/origin/commit/b285bfdc4c7807a619ded163cc49a83b7545eb88))
* **origin-backend:** add createdAt and updatedAt to every entity ([7aae8c0](https://github.com/energywebfoundation/origin/commit/7aae8c0212ec1c4cb4c0388d69c576ec05f9cdfb))
* **origin-backend:** add findDeviceProductInfo method ([a9a380b](https://github.com/energywebfoundation/origin/commit/a9a380b568b33fa344ee700024d4bbdcedfba830))
* New CertificationRequest structure + use ContractsLookup instead of MarketContractLookup ([cb380c0](https://github.com/energywebfoundation/origin/commit/cb380c05986ee5e8f8fb1398e225ee54147a3936))
* store energy amount in CertificationRequest ([5d756ba](https://github.com/energywebfoundation/origin/commit/5d756ba848245ebf50416d4ce53b61e8e0072ebb))
* support storing OwnershipCommitments off-chain ([6586895](https://github.com/energywebfoundation/origin/commit/658689556bb22a011e5dc947cf288f0b4c2cebcb))


### BREAKING CHANGES

* **device-registry:** The device registry is now entirely on-chain





# [4.0.0](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@3.8.0...@energyweb/origin-backend@4.0.0) (2020-03-16)


### Bug Fixes

* **origin-backend:** getting lastSmartMeterReading from a device ([00cea75](https://github.com/energywebfoundation/origin/commit/00cea7538b3198eb920a484d31922898bab2e1a2))
* store deviceTypes as simple-json ([7c330b6](https://github.com/energywebfoundation/origin/commit/7c330b63aa51cc05c4e9ca452b3b61c93605693c))
* **deps:** update dependency @nestjs/config to v0.3.0 ([4cdd97b](https://github.com/energywebfoundation/origin/commit/4cdd97bf62bcee3249535f90ca573fb2024b5a98))
* **deps:** update dependency ws to v7.2.3 ([14b2218](https://github.com/energywebfoundation/origin/commit/14b2218ad5df9b5873d59f70b317cbc3f5d8b158))
* fetch all device smart meter readings only on-demand ([0708917](https://github.com/energywebfoundation/origin/commit/07089170e80de59503c299755f5bdf5e26005a3b))
* **deps:** update dependency ws to v7.2.2 ([f04bd68](https://github.com/energywebfoundation/origin/commit/f04bd684c34ca65cf1096eaae2de1aae28170e01))
* **deps:** update nest monorepo to v6.11.11 ([8d93078](https://github.com/energywebfoundation/origin/commit/8d93078773c86dd04ffbf5419fa0b5fc94a6b7bf))


### Features

* add ExternalDeviceIdTypes to OriginConfiguration + unify all configuration items into one db table ([1469e32](https://github.com/energywebfoundation/origin/commit/1469e32ea369daf7f1b910c201670836248914ff))
* Regions and DeviceTypes in OriginConfiguration are now hard-typed ([23a1f29](https://github.com/energywebfoundation/origin/commit/23a1f29a890192b45b0f270d1ad48a48c47b5246))


### BREAKING CHANGES

* Configuration Client now works differently





# [3.8.0](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@3.7.1...@energyweb/origin-backend@3.8.0) (2020-03-02)


### Bug Fixes

* **deps:** update dependency @nestjs/jwt to v6.1.2 ([a8a1d9b](https://github.com/energywebfoundation/origin/commit/a8a1d9b9071026b2cfed345dd7bdfe80a1cd21b9))
* **deps:** update dependency typeorm to v0.2.24 ([fb6c68b](https://github.com/energywebfoundation/origin/commit/fb6c68b324524fe814859f6274428ddc4f938762))
* **deps:** update nest monorepo to v6.11.8 ([2934e78](https://github.com/energywebfoundation/origin/commit/2934e780c8555383427cc7c8e22e69fff59ec10f))


### Features

* Off-chain smart meter readings ([4dfbff0](https://github.com/energywebfoundation/origin/commit/4dfbff036b20578f6c2d960328a52deb0f0dff15))





## [3.7.1](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@3.7.0...@energyweb/origin-backend@3.7.1) (2020-02-17)

**Note:** Version bump only for package @energyweb/origin-backend





# [3.7.0](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@3.6.0...@energyweb/origin-backend@3.7.0) (2020-02-17)


### Bug Fixes

* **deps:** update dependency @nestjs/config to ^0.2.0 ([5f8f814](https://github.com/energywebfoundation/origin/commit/5f8f814114b3ae42611150c0a55e9721a7672e01))


### Features

* **origin-backend:** exchange module import ([16417a4](https://github.com/energywebfoundation/origin/commit/16417a4c6c8728f2274a165859c5b119dc517e9a))





# [3.6.0](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@3.5.0...@energyweb/origin-backend@3.6.0) (2020-02-12)


### Bug Fixes

* **deps:** pin dependencies ([2088944](https://github.com/energywebfoundation/origin/commit/20889448a7923ac3c459806a119faae47645d8ba))
* **origin-backend:** .env file location ([ae0a812](https://github.com/energywebfoundation/origin/commit/ae0a8125bf38a030956fb9ecea74e591d30f9434))
* fix demand matching and saving demand partially filled events ([6462129](https://github.com/energywebfoundation/origin/commit/646212912192599a52454d3e498bf73c4314a0ac))


### Features

* **exchange:** forwarded integration. refactoring ([b2d8ac0](https://github.com/energywebfoundation/origin/commit/b2d8ac0e70a298e790e9115a9dfddaa98921ec82))
* change certification requests to be off-chain evidence based ([555c696](https://github.com/energywebfoundation/origin/commit/555c696aff17bafd11c8c5403add627d6c95fbd9))





# [3.5.0](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@3.4.0...@energyweb/origin-backend@3.5.0) (2020-02-04)


### Bug Fixes

* **deps:** update nest monorepo to v6.11.5 ([0ddc961](https://github.com/energywebfoundation/origin/commit/0ddc9619933b5dd0585c4767b7229bf502e55ccf))


### Features

* add a WebSocket-based event gateway to the backend + create entities for Demand and Device ([af703ce](https://github.com/energywebfoundation/origin/commit/af703ce9065ea2dc3c2034ca571b563886d12a55))
* email notifications for organization status change, member invitation and removal ([a2f0dae](https://github.com/energywebfoundation/origin/commit/a2f0dae5dab021980c702dc339654d52af2db47d))





# [3.4.0](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@3.3.0...@energyweb/origin-backend@3.4.0) (2020-01-31)


### Bug Fixes

* **deps:** update dependency axios to v0.19.1 ([40aa752](https://github.com/energywebfoundation/origin/commit/40aa7522c28cb2f6c32608669f154633be749649))
* **deps:** update dependency axios to v0.19.2 ([696eb46](https://github.com/energywebfoundation/origin/commit/696eb46fd2c7d26c223baaaf9f75d7943fc71517))


### Features

* implement removing user from organization ([4c62da9](https://github.com/energywebfoundation/origin/commit/4c62da9837620dbfbca14e63fd7855de32c7dac5))
* **origin-backend:** implement organization invitation ([b6d6609](https://github.com/energywebfoundation/origin/commit/b6d6609f0031c51e7a6943590b60607e1035ede4))





# [3.3.0](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@3.2.0...@energyweb/origin-backend@3.3.0) (2020-01-17)


### Bug Fixes

* **origin-backend:** add default config value ([49f3d50](https://github.com/energywebfoundation/origin/commit/49f3d50c5f9e938e5597e54d490879d2d19c671d))
* **origin-backend:** change test command ([41e4892](https://github.com/energywebfoundation/origin/commit/41e4892c90c84a5fb6ebfa125f0c0334b947599c))


### Features

* **origin-backend:** implement authentication ([baa9fea](https://github.com/energywebfoundation/origin/commit/baa9feaa3567b104bcf46134526097c8fc8b86fb))





# [3.2.0](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@3.1.0...@energyweb/origin-backend@3.2.0) (2020-01-07)


### Bug Fixes

* **origin-backend:** fix uploads directory location ([82ddef3](https://github.com/energywebfoundation/origin/commit/82ddef36f673406d808200a0117f41f32ba295eb))


### Features

* complete backend for registering organization ([b0dd715](https://github.com/energywebfoundation/origin/commit/b0dd71550011b97765362aeea87285a75f8119c1))
* **origin-backend:** add endpoint to save organizations ([7382725](https://github.com/energywebfoundation/origin/commit/738272579d8214315323e79d163fe51e14676155))





# [3.1.0](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@3.0.0...@energyweb/origin-backend@3.1.0) (2019-12-20)


### Features

* **origin-backend:** add possibility to store images ([faf0e74](https://github.com/energywebfoundation/origin/commit/faf0e748b1980a4502764fbe78dc555927b9b398))
* **origin-backend:** add support for storing Country ([99e754e](https://github.com/energywebfoundation/origin/commit/99e754e0f46fa4aae24379ba463513df94e9081a))





# [3.0.0](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@2.1.0...@energyweb/origin-backend@3.0.0) (2019-12-19)


### Features

* **origin-backend:** Change the way we approach POST methods + add a Compliance endpoint ([f7da2d5](https://github.com/energywebfoundation/origin/commit/f7da2d5c118a9169a123201375a254e5a203bedf))


### BREAKING CHANGES

* **origin-backend:** Changed the way we approach POST methods. Use request body parameters instead of in-URL parameters





# [2.1.0](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@2.0.0...@energyweb/origin-backend@2.1.0) (2019-12-17)


### Features

* **origin-backend:** New endpoint: Currency ([86b59db](https://github.com/energywebfoundation/origin/commit/86b59dbab4f25f3c2b756c97b8c5a72bfa3f7eda))





# [2.0.0](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@1.3.4...@energyweb/origin-backend@2.0.0) (2019-12-12)


### Bug Fixes

* retry yarn add when building dockerfiles ([#366](https://github.com/energywebfoundation/origin/issues/366)) ([551c1f5](https://github.com/energywebfoundation/origin/commit/551c1f526c4f04c79cf2d5e363feb7340d01e6f0))


* [FIX] Backend hash storing (#341) ([b239101](https://github.com/energywebfoundation/origin/commit/b239101f51cffd7e37c9ea51654a75804cf502ed)), closes [#341](https://github.com/energywebfoundation/origin/issues/341)


### BREAKING CHANGES

* Changed the API endpoints from http://example.url/<marketLogicAddress>/<entity>/<id> to http://example.url/<marketLogicAddress>/<entity>/<id>/<offChainDataHash>

* feat(utils-general): use the new URL structure when fetching off-chain data
* Changed the API endpoints of the backend from http://example.url/<marketLogicAddress>/<entity>/<id> to http://example.url/<marketLogicAddress>/<entity>/<id>/<offChainDataHash>

* chore(user-registry): adjust to breaking changes
* Updated User API endpoints of the backend from http://example.url/<marketLogicAddress>/<entity>/<id> to http://example.url/<marketLogicAddress>/<entity>/<id>/<offChainDataHash>

* chore(asset-registry): adjust to breaking changes
* Updated Asset API endpoints of the backend from http://example.url/<marketLogicAddress>/<entity>/<id> to http://example.url/<marketLogicAddress>/<entity>/<id>/<offChainDataHash>

* chore(origin): fix constructor weird formatting

* fix(market): storing off-chain data references on-chain
* New contracts for PurchasableCertificate + Updated Market API endpoints of the backend from http://example.url/<marketLogicAddress>/<entity>/<id> to http://example.url/<marketLogicAddress>/<entity>/<id>/<offChainDataHash>

* chore(event-listener): more understandable tests

* fix(event-listener): make scan interval faster for tests

* feat(origin-backend): use a simpler URL structure
* The URL structure of the API changed to only store hashes, omitting IDs, entity types and market lookup contracts used previously

* chore(origin-backend-client): use only POST methods instead of POST and PUT
* Use the .insert() method instead of .insertOrUpdate()

* chore(utils-general): use .insert instead of .insertOrUpdate

* fix(origin-backend): return 200 on POSTing the same entity

* chore(utils-general): remove abstract getUrl()

* chore(user-registry): remove specific getUrl()

* chore(device-registry): remove specific getUrl()

* chore(origin): remove specific getUrl()

* chore(market): remove specific getUrl()

* chore(monorepo): reorder test:serial

* fix(origin-backend): adjust tests to new POST behaviour

* chore(monorepo): Add an ADR for simplifying off-chain data storage





## [1.3.4](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@1.3.3...@energyweb/origin-backend@1.3.4) (2019-11-26)


### Bug Fixes

* **docker-compose:** map whole db dir for origin-backend ([#264](https://github.com/energywebfoundation/origin/issues/264)) ([75560e4](https://github.com/energywebfoundation/origin/commit/75560e4f52d2e5e1aeae61fe884737df0303b065))





## [1.3.3](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@1.3.2...@energyweb/origin-backend@1.3.3) (2019-11-11)


### Bug Fixes

* fix yarn clean command ([#224](https://github.com/energywebfoundation/origin/issues/224)) ([e07e9d8](https://github.com/energywebfoundation/origin/commit/e07e9d85de1b80c9f1a721398e41d82db580049c))
* normalize API urls, fix solar simulator ([#228](https://github.com/energywebfoundation/origin/issues/228)) ([aeed701](https://github.com/energywebfoundation/origin/commit/aeed701b8d541fb30a26f63b84d716bea61b7101))
* **origin-backend:** docker deployment fixes ([#203](https://github.com/energywebfoundation/origin/issues/203)) ([2fc7fe9](https://github.com/energywebfoundation/origin/commit/2fc7fe9cc4394496fcacc7f666ff27d97f0ca14c))
* **origin-backend:** prepare for docker setup ([#200](https://github.com/energywebfoundation/origin/issues/200)) ([ca363d0](https://github.com/energywebfoundation/origin/commit/ca363d0935a121d23e7b37ebcaa187904ebc813c))





## [1.3.2](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@1.3.1...@energyweb/origin-backend@1.3.2) (2019-10-30)


### Bug Fixes

* makefiles escaped variables ([052810c](https://github.com/energywebfoundation/origin/commit/052810c7ecf6343f044ed4e9922fd57107ab61e7))
* whitespaces ([3380deb](https://github.com/energywebfoundation/origin/commit/3380deb25954f8d82726f748c0f944bebed97ac0))





## [1.3.1](https://github.com/energywebfoundation/origin/compare/@energyweb/origin-backend@1.3.0...@energyweb/origin-backend@1.3.1) (2019-10-30)

**Note:** Version bump only for package @energyweb/origin-backend





# 1.3.0 (2019-10-25)


### Features

* **backend:** Replace testbackend with the new origin-backend ([#137](https://github.com/energywebfoundation/origin/issues/137)) ([c428e7d](https://github.com/energywebfoundation/origin/commit/c428e7d44300ae306a9e759fc8897135e9d0e1be))





# 1.2.0 (2019-10-23)


### Bug Fixes

* **deps:** update dependency express to v4.17.1 ([#63](https://github.com/energywebfoundation/ew-utils-testbackend/issues/63)) ([1bcac38](https://github.com/energywebfoundation/ew-utils-testbackend/commit/1bcac38))
* **deps:** update dependency fs-extra to v8.1.0 ([#64](https://github.com/energywebfoundation/ew-utils-testbackend/issues/64)) ([ccd9ed5](https://github.com/energywebfoundation/ew-utils-testbackend/commit/ccd9ed5))
* fix demo deployment and update dependencies ([#84](https://github.com/energywebfoundation/ew-utils-testbackend/issues/84)) ([5d366e6](https://github.com/energywebfoundation/ew-utils-testbackend/commit/5d366e6))
* publish access configs ([bd4fa2b](https://github.com/energywebfoundation/ew-utils-testbackend/commit/bd4fa2b))
* publish access configs ([ecc00a2](https://github.com/energywebfoundation/ew-utils-testbackend/commit/ecc00a2))


### Features

* **user-registry:** User Off-Chain Properties ([#15](https://github.com/energywebfoundation/ew-utils-testbackend/issues/15)) ([b6c2a31](https://github.com/energywebfoundation/ew-utils-testbackend/commit/b6c2a31))
* consuming assets unique storage ([#86](https://github.com/energywebfoundation/ew-utils-testbackend/issues/86)) ([226eadf](https://github.com/energywebfoundation/ew-utils-testbackend/commit/226eadf))
* setup prettier and lint config for Origin UI ([#20](https://github.com/energywebfoundation/ew-utils-testbackend/issues/20)) ([9cb4486](https://github.com/energywebfoundation/ew-utils-testbackend/commit/9cb4486))
