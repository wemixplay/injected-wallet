"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var axiosA2a_1 = require("../helper/api/axiosA2a");
var axiosPlayWallet_1 = require("../helper/api/axiosPlayWallet");
var store_1 = require("../store");
var PlayWalletApiService = /** @class */ (function () {
    function PlayWalletApiService() {
    }
    PlayWalletApiService.prototype.a2aServerlessPrepared = function (qrPrepareParam) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/a2a/prepare";
                        return [4 /*yield*/, axiosA2a_1.requestA2aApi.post(url, tslib_1.__assign({}, qrPrepareParam))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PlayWalletApiService.prototype.a2aServerlessAccessToken = function (qrTokenParam) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        url = "/a2a/accesstoken";
                        return [4 /*yield*/, axiosA2a_1.requestA2aApi.post(url, tslib_1.__assign({}, qrTokenParam))];
                    case 1:
                        response = _c.sent();
                        if (response) {
                            (0, store_1.set)('accessToken', (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.access_token);
                            (0, store_1.set)('refreshToken', (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.refresh_token);
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    PlayWalletApiService.prototype.unsignedTx = function (unsignedTxParam) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url;
            return tslib_1.__generator(this, function (_a) {
                url = "/account/unsignedTx";
                return [2 /*return*/, axiosPlayWallet_1.requestPlayWalletApi.post(url, unsignedTxParam)];
            });
        });
    };
    PlayWalletApiService.prototype.sendSignedTx = function (hash, signature, type) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url;
            return tslib_1.__generator(this, function (_a) {
                url = "/account/signedTx";
                return [2 /*return*/, axiosPlayWallet_1.requestPlayWalletApi.post(url, {
                        hash: hash,
                        sign: signature,
                        type: type
                    })];
            });
        });
    };
    PlayWalletApiService.prototype.fetchUserInfo = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/login";
                        return [4 /*yield*/, axiosPlayWallet_1.requestPlayWalletApi.post(url, { lang: 'en' })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
                }
            });
        });
    };
    PlayWalletApiService.prototype.verifyToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/verify";
                        return [4 /*yield*/, axiosPlayWallet_1.requestPlayWalletApi.post(url)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
                }
            });
        });
    };
    PlayWalletApiService.prototype.fetchBalanceAll = function () {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = "/balance/balanceAll";
                        return [4 /*yield*/, axiosPlayWallet_1.requestPlayWalletApi.get(url)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.balances];
                }
            });
        });
    };
    return PlayWalletApiService;
}());
exports.default = PlayWalletApiService;
