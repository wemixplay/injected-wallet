"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestMainnetApi = void 0;
var tslib_1 = require("tslib");
var axios_1 = require("axios");
var store_1 = require("../../store");
var mainnetUrl = null;
var mainnetApiKey = null;
store_1.wemixSdkStore.subscribe(function (state) {
    // mainnetUrl = state.mainnetUrl;
    mainnetUrl = '';
    // mainnetApiKey = state.mainnetApiKey;
    mainnetApiKey = '';
});
var requestMainnetApi = function (_a) {
    var _b = _a.method, method = _b === void 0 ? 'post' : _b, _c = _a.url, url = _c === void 0 ? '' : _c, _d = _a.data, data = _d === void 0 ? null : _d;
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var response;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, (0, axios_1.default)({
                        method: method,
                        url: "".concat(mainnetUrl, "/").concat(url),
                        data: data,
                        withCredentials: false,
                        timeout: 60000,
                        headers: {
                            'Content-Type': 'application/json',
                            'api-key': "".concat(mainnetApiKey)
                        }
                    })];
                case 1:
                    response = _e.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
};
exports.requestMainnetApi = requestMainnetApi;
