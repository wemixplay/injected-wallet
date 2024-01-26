"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var playWemixIcon_1 = require("./assets/playWemixIcon");
var environment_1 = require("./helper/constant/environment");
var PlayWalletSdkWeb_1 = require("./sdk/PlayWalletSdkWeb");
function wemixPlayWallet(_a) {
    var _this = this;
    var env = _a.env, clientId = _a.clientId, interfaceFunction = _a.interfaceFunction;
    var envConfig = (0, environment_1.ENV_CONFIG)(env || 'prod');
    // playWalletSdk 초기화 WEMIX 3.0 mainnet 혹은 testnet 초기화
    var findChain = function (chains) {
        var chain = chains === null || chains === void 0 ? void 0 : chains.find(function (chainInfo) { return (chainInfo === null || chainInfo === void 0 ? void 0 : chainInfo.id) === (envConfig === null || envConfig === void 0 ? void 0 : envConfig.chainId); });
        return chain !== null && chain !== void 0 ? chain : null;
    };
    return function () {
        return {
            label: 'Wemix Play Wallet',
            getIcon: function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, playWemixIcon_1.default];
            }); }); },
            getInterface: function (_a) {
                var chains = _a.chains, appMetadata = _a.appMetadata;
                return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var searchedChain, playWalletSdk, provider;
                    return tslib_1.__generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                searchedChain = chains[0];
                                searchedChain = findChain(chains);
                                playWalletSdk = new PlayWalletSdkWeb_1.default({
                                    envConfig: envConfig,
                                    clientId: clientId,
                                    chainId: searchedChain === null || searchedChain === void 0 ? void 0 : searchedChain.id,
                                    chainRpcUrl: searchedChain === null || searchedChain === void 0 ? void 0 : searchedChain.rpcUrl,
                                    chains: chains,
                                    prepared: interfaceFunction.prepared,
                                    signJwt: interfaceFunction.signJwt,
                                    unsignedTx: interfaceFunction.unsignedTx,
                                    sendSignedTx: interfaceFunction.sendSignedTx
                                });
                                return [4 /*yield*/, playWalletSdk.initPlayWallet()];
                            case 1:
                                _b.sent();
                                provider = playWalletSdk.createProvider();
                                return [2 /*return*/, { provider: provider, instance: playWalletSdk.getwemixSdk() }];
                        }
                    });
                });
            }
        };
    };
}
exports.default = wemixPlayWallet;
