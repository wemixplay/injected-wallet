"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestBinderMainnetApi = void 0;
var tslib_1 = require("tslib");
var axios_1 = require("axios");
var store_1 = require("../../store");
var binderMainnetUrl = null;
var binderMainnetJWT = null;
store_1.wemixSdkStore.subscribe(function (state) {
    // binderMainnetUrl = state.binderMainnetUrl;
    // binderMainnetJWT = state.binderMainnetJWT;
});
var requestBinderMainnetApi = function (params) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.default.post(binderMainnetUrl, params, {
                    withCredentials: false,
                    timeout: 60000,
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: "Bearer ".concat(binderMainnetJWT)
                    }
                })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
exports.requestBinderMainnetApi = requestBinderMainnetApi;
