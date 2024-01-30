import { __assign, __awaiter, __generator } from "tslib";
import { requestWemixPlayApi } from '../helper/api/axiosWemixPlay';
import { set } from '../store';
var WemixPlayApiService = /** @class */ (function () {
    function WemixPlayApiService(sdkInstance) {
        this._sdkInstance = sdkInstance;
    }
    WemixPlayApiService.prototype.prepared = function (qrPrepareParam) {
        return __awaiter(this, void 0, void 0, function () {
            var url, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "/info/v1/a2a/prepare";
                        return [4 /*yield*/, requestWemixPlayApi.post(url, __assign({}, qrPrepareParam))];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    WemixPlayApiService.prototype.fetchToken = function (qrTokenParam) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        url = "/info/v1/a2a/token";
                        return [4 /*yield*/, requestWemixPlayApi.post(url, __assign({}, qrTokenParam))];
                    case 1:
                        response = _c.sent();
                        if (response) {
                            set('accessToken', (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data.access_token);
                            set('refreshToken', (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.data.refresh_token);
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    WemixPlayApiService.prototype.unsignedTx = function (unsignedTxParam) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = "/account/unsignedTx";
                return [2 /*return*/, requestWemixPlayApi.post(url, unsignedTxParam)];
            });
        });
    };
    WemixPlayApiService.prototype.sendSignedTx = function (hash, signature, type, chain) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = "/defi/signedTx";
                return [2 /*return*/, requestWemixPlayApi.post(url, {
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
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = "/info/v1/auth/login";
                        return [4 /*yield*/, requestWemixPlayApi.post(url, { lang: 'en' })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.userInfo];
                }
            });
        });
    };
    WemixPlayApiService.prototype.fetchBalanceAll = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        url = "/defi/mypage/v2/all-balance";
                        return [4 /*yield*/, requestWemixPlayApi.get(url)];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.Balances];
                }
            });
        });
    };
    return WemixPlayApiService;
}());
export default WemixPlayApiService;
