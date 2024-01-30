import { __awaiter, __generator } from "tslib";
import icon from './assets/playWemixIcon';
import { ENV_CONFIG } from './helper/constant/environment';
import PlayWalletSdkWeb from './sdk/PlayWalletSdkWeb';
function wemixPlayWallet(_a) {
    var _this = this;
    var env = _a.env, clientId = _a.clientId, interfaceFunction = _a.interfaceFunction;
    var envConfig = ENV_CONFIG(env || 'prod');
    // playWalletSdk 초기화 WEMIX 3.0 mainnet 혹은 testnet 초기화
    var findChain = function (chains) {
        var chain = chains === null || chains === void 0 ? void 0 : chains.find(function (chainInfo) { return (chainInfo === null || chainInfo === void 0 ? void 0 : chainInfo.id) === (envConfig === null || envConfig === void 0 ? void 0 : envConfig.chainId); });
        return chain !== null && chain !== void 0 ? chain : null;
    };
    return function () {
        return {
            label: 'Wemix Play Wallet',
            getIcon: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, icon];
            }); }); },
            getInterface: function (_a) {
                var chains = _a.chains, appMetadata = _a.appMetadata;
                return __awaiter(_this, void 0, void 0, function () {
                    var searchedChain, playWalletSdk, provider;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                searchedChain = chains[0];
                                searchedChain = findChain(chains);
                                playWalletSdk = new PlayWalletSdkWeb({
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
export default wemixPlayWallet;
