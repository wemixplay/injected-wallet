"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestBinderApi = void 0;
var tslib_1 = require("tslib");
var axios_1 = require("axios");
var store_1 = require("../../store");
var binderUrl = null;
store_1.wemixSdkStore.subscribe(function (state) {
    binderUrl = '';
});
var requestBinderApi = function (params) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.default.post(binderUrl, params)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
exports.requestBinderApi = requestBinderApi;
