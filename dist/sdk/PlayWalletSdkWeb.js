import { __awaiter, __generator } from "tslib";
import { ProviderRpcError, ProviderRpcErrorCode } from '@web3-onboard/common';
import PlayWalletProvider from '../provider/PlayWalletProvider';
import PlayWalletApiService from '../service/PlayWalletApiService';
import { get, wemixSdkStore } from '../store';
var PlayWalletSdkWeb = /** @class */ (function () {
    function PlayWalletSdkWeb(_a) {
        var envConfig = _a.envConfig, clientId = _a.clientId, chainId = _a.chainId, chainRpcUrl = _a.chainRpcUrl, chains = _a.chains, prepared = _a.prepared, signJwt = _a.signJwt, unsignedTx = _a.unsignedTx, sendSignedTx = _a.sendSignedTx;
        var _this = this;
        wemixSdkStore.setState({
            envConfig: envConfig,
            baseUrl: envConfig.baseUrl,
            clientId: clientId,
            chainId: chainId,
            chainRpcUrl: chainRpcUrl,
            chains: chains
        });
        this._chainRpcUrl = get('chainRpcUrl');
        this._playWalletApiService = new PlayWalletApiService();
        this._prepared = prepared !== null && prepared !== void 0 ? prepared : this._playWalletApiService.a2aServerlessPrepared;
        this._signJwt = signJwt !== null && signJwt !== void 0 ? signJwt : this._playWalletApiService.a2aServerlessAccessToken;
        this._unsignedTx = unsignedTx !== null && unsignedTx !== void 0 ? unsignedTx : this._playWalletApiService.unsignedTx;
        this._sendSignedTx = sendSignedTx !== null && sendSignedTx !== void 0 ? sendSignedTx : this._playWalletApiService.sendSignedTx;
        this._sdkInfo = {
            webauth: envConfig.webAuthUrl,
            oauth: envConfig.oauthUrl,
            wallet: envConfig.walletUrl,
            binder: envConfig.binderUrl,
            client_id: clientId
        };
        wemixSdkStore.subscribe(function (state) {
            _this._chainRpcUrl = state.chainRpcUrl;
        });
    }
    PlayWalletSdkWeb.prototype.initWemixSdk = function () {
        window.wemix().setRequestPreparedFunction(this._prepared);
        window.wemix().setRequestTokenFunction(this._signJwt);
        window.wemix().setRequestMakeUnsignedTx(this._unsignedTx);
        window.wemix().setRequestSendSignedTx(this._sendSignedTx);
        window.WEMIX_SDK = new window.wemix();
        window.WEMIX_SDK.setLocale('en');
        window.WEMIX_SDK.setEnv(this._sdkInfo);
        this._wemixSdk = window.WEMIX_SDK;
        console.info('Done is initPlayWallet()');
    };
    PlayWalletSdkWeb.prototype.closeSdkModal = function () {
        var _a, _b, _c, _d;
        // window?.WEMIX_SDK?.closeQR();
        if ((_a = window.WEMIX_SDK) === null || _a === void 0 ? void 0 : _a.getQR()) {
            (_d = (_c = (_b = window.WEMIX_SDK) === null || _b === void 0 ? void 0 : _b.getQR()) === null || _c === void 0 ? void 0 : _c.btnClose) === null || _d === void 0 ? void 0 : _d.click();
        }
    };
    PlayWalletSdkWeb.prototype.initPlayWallet = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, import('./wemix.js')];
                    case 1:
                        _a.sent();
                        if (typeof (window === null || window === void 0 ? void 0 : window.wemix) !== 'function') {
                            console.error('Not found wemix in Global.window');
                            return [2 /*return*/, false];
                        }
                        else {
                            this.initWemixSdk();
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayWalletSdkWeb.prototype.openAuthQrModal = function (isOpen) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var _a;
                        if (!window.WEMIX_SDK) {
                            _this.initPlayWallet();
                        }
                        if (isOpen) {
                            (_a = window.WEMIX_SDK) === null || _a === void 0 ? void 0 : _a.openQR('auth', null, // req param
                            null, // chainName
                            function (success) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    /** Login Query(useSelectUserInfo작동을 위한 리로드) */
                                    resolve(this._playWalletApiService.fetchUserInfo());
                                    this.closeSdkModal();
                                    return [2 /*return*/];
                                });
                            }); }, function (fail) {
                                _this.closeSdkModal();
                                throw new ProviderRpcError({
                                    code: ProviderRpcErrorCode.ACCOUNT_ACCESS_REJECTED,
                                    message: 'Play Wallet rejected the request auth.'
                                });
                            });
                        }
                        else {
                            _this.closeSdkModal();
                        }
                    })];
            });
        });
    };
    PlayWalletSdkWeb.prototype.makeUnsignedTx = function (unsignedTxParam) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var txtype, chain, to, token_approved, value, method, args, extra_approveds, unsigned, hashes, _d;
            var _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        txtype = unsignedTxParam.txtype, chain = unsignedTxParam.chain, to = unsignedTxParam.to, token_approved = unsignedTxParam.token_approved, value = unsignedTxParam.value, method = unsignedTxParam.method, args = unsignedTxParam.args, extra_approveds = unsignedTxParam.extra_approveds;
                        return [4 /*yield*/, ((_a = window.WEMIX_SDK) === null || _a === void 0 ? void 0 : _a.makeUnsignedTx(txtype, chain, to, token_approved, value, method, args, extra_approveds).catch(function (error) {
                                var _a = error.response, _b = _a === void 0 ? {} : _a, data = _b.data;
                            }))];
                    case 1:
                        unsigned = _f.sent();
                        if (!unsigned) {
                            return [2 /*return*/];
                        }
                        hashes = (_b = unsigned === null || unsigned === void 0 ? void 0 : unsigned.data) === null || _b === void 0 ? void 0 : _b.hash;
                        _e = {
                            hashes: hashes !== null && hashes !== void 0 ? hashes : null
                        };
                        if (!hashes) return [3 /*break*/, 3];
                        return [4 /*yield*/, ((_c = window.WEMIX_SDK) === null || _c === void 0 ? void 0 : _c.requestSignature(hashes))];
                    case 2:
                        _d = _f.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _d = null;
                        _f.label = 4;
                    case 4: return [2 /*return*/, (_e.req = _d,
                            _e)];
                }
            });
        });
    };
    PlayWalletSdkWeb.prototype.openSignQrModal = function (unsignedTxParam) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, hashes, req;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.makeUnsignedTx(unsignedTxParam)];
                    case 1:
                        _a = _b.sent(), hashes = _a.hashes, req = _a.req;
                        return [2 /*return*/, new Promise(function (resolve) {
                                window.WEMIX_SDK.openQR('sign', req, function (success) {
                                    resolve(hashes);
                                    _this.closeSdkModal();
                                }, function (_fails, error) {
                                    _this.closeSdkModal();
                                    throw new ProviderRpcError({
                                        code: ProviderRpcErrorCode.ACCOUNT_ACCESS_REJECTED,
                                        message: 'Play Wallet rejected the request sign transaction.'
                                    });
                                });
                            })];
                }
            });
        });
    };
    PlayWalletSdkWeb.prototype.openOnlySignQrModal = function (_a) {
        var _b = _a.hashes, hashes = _b === void 0 ? null : _b, _c = _a.req, req = _c === void 0 ? null : _c;
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_d) {
                if (hashes && req) {
                    return [2 /*return*/, new Promise(function (resolve) {
                            window.WEMIX_SDK.openQR('sign', req, function (success) {
                                resolve(hashes);
                                _this.closeSdkModal();
                            }, function (_fails, error) {
                                _this.closeSdkModal();
                                throw new ProviderRpcError({
                                    code: ProviderRpcErrorCode.ACCOUNT_ACCESS_REJECTED,
                                    message: 'Play Wallet rejected the request sign transaction.'
                                });
                            });
                        })];
                }
                else {
                    throw new ProviderRpcError({
                        code: ProviderRpcErrorCode.ACCOUNT_ACCESS_REJECTED,
                        message: 'Play Wallet rejected the request sign transaction.'
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    PlayWalletSdkWeb.prototype.openModal = function (_a) {
        var type = _a.type, req = _a.req, chainName = _a.chainName, _b = _a.message, message = _b === void 0 ? 'Play Wallet rejected' : _b;
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_c) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var _a;
                        (_a = window === null || window === void 0 ? void 0 : window.WEMIX_SDK) === null || _a === void 0 ? void 0 : _a.openQR(type, req, chainName, function (success) {
                            resolve(success);
                            _this.closeSdkModal();
                        }, function (_fails, error) {
                            _this.closeSdkModal();
                            throw new ProviderRpcError({
                                code: ProviderRpcErrorCode.ACCOUNT_ACCESS_REJECTED,
                                message: message
                            });
                        });
                    })];
            });
        });
    };
    PlayWalletSdkWeb.prototype.getBalanceAll = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, (_a = this._playWalletApiService.fetchBalanceAll()) !== null && _a !== void 0 ? _a : []];
            });
        });
    };
    PlayWalletSdkWeb.prototype.getChainRpcUrl = function () {
        return this._chainRpcUrl;
    };
    PlayWalletSdkWeb.prototype.createProvider = function () {
        if (this._provider) {
            return this._provider;
        }
        var playWalletProvider = new PlayWalletProvider(this);
        this._provider = playWalletProvider;
        return playWalletProvider;
    };
    PlayWalletSdkWeb.prototype.getProvider = function () {
        var _a;
        return (_a = this._provider) !== null && _a !== void 0 ? _a : null;
    };
    PlayWalletSdkWeb.prototype.getwemixSdk = function () {
        return this._wemixSdk;
    };
    PlayWalletSdkWeb.prototype.getInterfaceFunction = function () {
        return {
            prepared: this._prepared,
            signJwt: this._signJwt,
            unsignedTx: this._unsignedTx,
            signedTx: this._sendSignedTx
        };
    };
    return PlayWalletSdkWeb;
}());
export default PlayWalletSdkWeb;
