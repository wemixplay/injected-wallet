"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPlugin = void 0;
var tslib_1 = require("tslib");
var PlayWalletApiService_1 = require("../../service/PlayWalletApiService");
var REQUEST_ACTION_TYPES_API = Object.freeze({
    PREPARED: 'playWalletPrepared',
    FETCH_JWT_TOKEN: 'playWalletIssueJwtToken',
    UNSIGNED_TRANSACTION: 'playWalletUnsignedTx',
    SIGN_TRANSACTION: 'playWalletSignedTx',
    FETCH_USER_INFO: 'playWalletLogin'
});
var ApiPlugin = /** @class */ (function () {
    function ApiPlugin() {
        this._apiService = new PlayWalletApiService_1.default();
    }
    ApiPlugin.prototype.request = function (_a) {
        var method = _a.method, params = _a.params;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_b) {
                switch (method) {
                    case REQUEST_ACTION_TYPES_API.PREPARED: {
                        return [2 /*return*/, this._apiService.prepared(params)];
                    }
                    case REQUEST_ACTION_TYPES_API.FETCH_JWT_TOKEN: {
                        return [2 /*return*/, this._apiService.fetchToken(params)];
                    }
                    case REQUEST_ACTION_TYPES_API.UNSIGNED_TRANSACTION: {
                        return [2 /*return*/, this._apiService.unsignedTx(params)];
                    }
                    case REQUEST_ACTION_TYPES_API.SIGN_TRANSACTION: {
                        return [2 /*return*/, this._apiService.sendSignedTx(params === null || params === void 0 ? void 0 : params.hash, params === null || params === void 0 ? void 0 : params.signature, params === null || params === void 0 ? void 0 : params.type, params === null || params === void 0 ? void 0 : params.chain)];
                    }
                    default: {
                        return [2 /*return*/, null];
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    return ApiPlugin;
}());
exports.ApiPlugin = ApiPlugin;
