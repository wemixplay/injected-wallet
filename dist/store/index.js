"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initStore = exports.set = exports.get = exports.wemixSdkStore = void 0;
var tslib_1 = require("tslib");
var vanilla_1 = require("zustand/vanilla");
var helper_1 = require("../helper");
var INIT_STORE_DATA = Object.freeze({
    envConfig: null,
    baseUrl: helper_1.CONST.BLANK,
    clientId: helper_1.CONST.BLANK,
    tokenAddress: helper_1.CONST.BLANK,
    chainId: helper_1.CONST.BLANK,
    chainRpcUrl: helper_1.CONST.BLANK,
    chains: [],
    walletAddress: helper_1.CONST.BLANK,
    accessToken: helper_1.CONST.BLANK,
    refreshToken: helper_1.CONST.BLANK
});
var wemixSdkStore = (0, vanilla_1.createStore)(function () { return (0, helper_1.cloneObject)(INIT_STORE_DATA); });
exports.wemixSdkStore = wemixSdkStore;
var get = function (key) {
    var _a, _b;
    return (_b = (_a = wemixSdkStore.getState()) === null || _a === void 0 ? void 0 : _a[key]) !== null && _b !== void 0 ? _b : undefined;
};
exports.get = get;
var set = function (key, value) {
    wemixSdkStore.setState(function (state) {
        var _a;
        return (tslib_1.__assign(tslib_1.__assign({}, state), (_a = {}, _a[key] = value, _a)));
    });
};
exports.set = set;
var initStore = function () { return wemixSdkStore.setState(function () { return (0, helper_1.cloneObject)(INIT_STORE_DATA); }); };
exports.initStore = initStore;
