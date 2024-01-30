import { __awaiter, __generator } from "tslib";
import WalletApiService from '../../service/PlayWalletApiService';
var REQUEST_ACTION_TYPES_API = Object.freeze({
    PLAY_PREPARED: 'play_prepared',
    PLAY_ACCESS_TOKEN: 'play_accesstoken',
    PLAY_MAKE_UNSIGNED_TRANSACTION: 'play_makeUnsignedTx',
    PLAY_SEND_SIGNED_TRANSACTION: 'play_sendSignedTx',
    PLAY_LOGIN: 'play_login'
});
var PlayPlugin = /** @class */ (function () {
    function PlayPlugin(sdkInstance) {
        this._sdkInstance = sdkInstance;
        this._walletApiService = new WalletApiService();
    }
    PlayPlugin.prototype.request = function (_a) {
        var method = _a.method, params = _a.params;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (method) {
                    case REQUEST_ACTION_TYPES_API.PLAY_PREPARED: {
                        return [2 /*return*/, this._walletApiService.a2aServerlessPrepared(params)];
                    }
                    case REQUEST_ACTION_TYPES_API.PLAY_ACCESS_TOKEN: {
                        return [2 /*return*/, this._walletApiService.a2aServerlessAccessToken(params)];
                    }
                    case REQUEST_ACTION_TYPES_API.PLAY_MAKE_UNSIGNED_TRANSACTION: {
                        return [2 /*return*/, this._sdkInstance.openSignQrModal(params)];
                    }
                    case REQUEST_ACTION_TYPES_API.PLAY_SEND_SIGNED_TRANSACTION: {
                        return [2 /*return*/, this._walletApiService.sendSignedTx(params === null || params === void 0 ? void 0 : params.hash, params === null || params === void 0 ? void 0 : params.signature, params === null || params === void 0 ? void 0 : params.type)];
                    }
                    default: {
                        return [2 /*return*/, null];
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    return PlayPlugin;
}());
export { PlayPlugin };
