"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var axiosWemixPlay_1 = require("../helper/api/axiosWemixPlay");
var store_1 = require("../store");
var WemixPlayApiService = /** @class */ (function () {
    function WemixPlayApiService(sdkInstance) {
        this._sdkInstance = sdkInstance;
    }
    WemixPlayApiService.prototype.prepared = function (qrPrepareParam) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/info/v1/a2a/prepare";
                        return [4 /*yield*/, axiosWemixPlay_1.requestWemixPlayApi.post(url, tslib_1.__assign({}, qrPrepareParam))];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    WemixPlayApiService.prototype.fetchToken = function (qrTokenParam) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        url = "/info/v1/a2a/token";
                        return [4 /*yield*/, axiosWemixPlay_1.requestWemixPlayApi.post(url, tslib_1.__assign({}, qrTokenParam))];
                    case 1:
                        response = _c.sent();
                        if (response) {
                            (0, store_1.set)('accessToken', (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data.access_token);
                            (0, store_1.set)('refreshToken', (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.data.refresh_token);
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    WemixPlayApiService.prototype.unsignedTx = function (unsignedTxParam) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url;
            return tslib_1.__generator(this, function (_a) {
                url = "/account/unsignedTx";
                return [2 /*return*/, axiosWemixPlay_1.requestWemixPlayApi.post(url, unsignedTxParam)];
            });
        });
    };
    WemixPlayApiService.prototype.sendSignedTx = function (hash, signature, type, chain) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url;
            return tslib_1.__generator(this, function (_a) {
                url = "/defi/signedTx";
                return [2 /*return*/, axiosWemixPlay_1.requestWemixPlayApi.post(url, {
                        hash: hash,
                        sign: signature,
                        type: type,
                        chainName: chain
                    })];
            });
        });
    };
    WemixPlayApiService.prototype.fetchUserInfo = function () {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = "/info/v1/auth/login";
                        return [4 /*yield*/, axiosWemixPlay_1.requestWemixPlayApi.post(url, { lang: 'en' })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.userInfo];
                }
            });
        });
    };
    WemixPlayApiService.prototype.fetchBalanceAll = function () {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        url = "/defi/mypage/v2/all-balance";
                        return [4 /*yield*/, axiosWemixPlay_1.requestWemixPlayApi.get(url)];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.Balances];
                }
            });
        });
    };
    return WemixPlayApiService;
}());
exports.default = WemixPlayApiService;
