import { __assign, __awaiter, __generator } from "tslib";
import { requestA2aApi } from '../helper/api/axiosA2a';
import { requestPlayWalletApi } from '../helper/api/axiosPlayWallet';
import { set } from '../store';
var PlayWalletApiService = /** @class */ (function () {
    function PlayWalletApiService() {
    }
    PlayWalletApiService.prototype.a2aServerlessPrepared = function (qrPrepareParam) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/a2a/prepare";
                        return [4 /*yield*/, requestA2aApi.post(url, __assign({}, qrPrepareParam))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PlayWalletApiService.prototype.a2aServerlessAccessToken = function (qrTokenParam) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        url = "/a2a/accesstoken";
                        return [4 /*yield*/, requestA2aApi.post(url, __assign({}, qrTokenParam))];
                    case 1:
                        response = _c.sent();
                        if (response) {
                            set('accessToken', (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.access_token);
                            set('refreshToken', (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.refresh_token);
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    PlayWalletApiService.prototype.unsignedTx = function (unsignedTxParam) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = "/account/unsignedTx";
                return [2 /*return*/, requestPlayWalletApi.post(url, unsignedTxParam)];
            });
        });
    };
    PlayWalletApiService.prototype.sendSignedTx = function (hash, signature, type) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = "/account/signedTx";
                return [2 /*return*/, requestPlayWalletApi.post(url, {
                        hash: hash,
                        sign: signature,
                        type: type
                    })];
            });
        });
    };
    PlayWalletApiService.prototype.fetchUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/login";
                        return [4 /*yield*/, requestPlayWalletApi.post(url, { lang: 'en' })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
                }
            });
        });
    };
    PlayWalletApiService.prototype.verifyToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/verify";
                        return [4 /*yield*/, requestPlayWalletApi.post(url)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
                }
            });
        });
    };
    PlayWalletApiService.prototype.fetchBalanceAll = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = "/balance/balanceAll";
                        return [4 /*yield*/, requestPlayWalletApi.get(url)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.balances];
                }
            });
        });
    };
    return PlayWalletApiService;
}());
export default PlayWalletApiService;
