"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayWalletPlugin = void 0;
var tslib_1 = require("tslib");
var PlayWalletApiService_1 = require("../../service/PlayWalletApiService");
var REQUEST_ACTION_TYPES_API = Object.freeze({
    PLAY_WALLET_PREPARED: 'playWallet_prepared',
    PLAY_WALLET_ACCESS_TOKEN: 'playWallet_accesstoken',
    PLAY_WALLET_MAKE_UNSIGNED_TRANSACTION: 'playWallet_makeUnsignedTx',
    PLAY_WALLET_SEND_SIGNED_TRANSACTION: 'playWallet_sendSignedTx',
    PLAY_WALLET_LOGIN: 'playWallet_login',
    PLAY_WALLET_VERIFY_TOKEN: 'playWallet_verifyToken',
    PLAY_WALLET_BALANCE_ALL: 'playWallet_balanceAll'
});
var PlayWalletPlugin = /** @class */ (function () {
    function PlayWalletPlugin(sdkInstance) {
        this._sdkInstance = sdkInstance;
        this._walletApiService = new PlayWalletApiService_1.default();
    }
    PlayWalletPlugin.prototype.request = function (_a) {
        var method = _a.method, params = _a.params;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_b) {
                switch (method) {
                    case REQUEST_ACTION_TYPES_API.PLAY_WALLET_PREPARED: {
                        return [2 /*return*/, this._walletApiService.a2aServerlessPrepared(params)];
                    }
                    case REQUEST_ACTION_TYPES_API.PLAY_WALLET_ACCESS_TOKEN: {
                        return [2 /*return*/, this._walletApiService.a2aServerlessAccessToken(params)];
                    }
                    case REQUEST_ACTION_TYPES_API.PLAY_WALLET_MAKE_UNSIGNED_TRANSACTION: {
                        return [2 /*return*/, this._sdkInstance.openSignQrModal(params)];
                    }
                    case REQUEST_ACTION_TYPES_API.PLAY_WALLET_SEND_SIGNED_TRANSACTION: {
                        return [2 /*return*/, this._walletApiService.sendSignedTx(params === null || params === void 0 ? void 0 : params.hash, params === null || params === void 0 ? void 0 : params.signature, params === null || params === void 0 ? void 0 : params.type)];
                    }
                    case REQUEST_ACTION_TYPES_API.PLAY_WALLET_LOGIN: {
                        return [2 /*return*/, this._walletApiService.fetchUserInfo()];
                    }
                    case REQUEST_ACTION_TYPES_API.PLAY_WALLET_VERIFY_TOKEN: {
                        return [2 /*return*/, this._walletApiService.verifyToken()];
                    }
                    case REQUEST_ACTION_TYPES_API.PLAY_WALLET_BALANCE_ALL: {
                        return [2 /*return*/, this._walletApiService.fetchBalanceAll()];
                    }
                    default: {
                        return [2 /*return*/, null];
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    return PlayWalletPlugin;
}());
exports.PlayWalletPlugin = PlayWalletPlugin;
