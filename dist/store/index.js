import { __assign } from "tslib";
import { createStore } from 'zustand/vanilla';
import { cloneObject, CONST } from '../helper';
var INIT_STORE_DATA = Object.freeze({
    envConfig: null,
    baseUrl: CONST.BLANK,
    clientId: CONST.BLANK,
    tokenAddress: CONST.BLANK,
    chainId: CONST.BLANK,
    chainRpcUrl: CONST.BLANK,
    chains: [],
    walletAddress: CONST.BLANK,
    accessToken: CONST.BLANK,
    refreshToken: CONST.BLANK
});
var wemixSdkStore = createStore(function () { return cloneObject(INIT_STORE_DATA); });
var get = function (key) {
    var _a, _b;
    return (_b = (_a = wemixSdkStore.getState()) === null || _a === void 0 ? void 0 : _a[key]) !== null && _b !== void 0 ? _b : undefined;
};
var set = function (key, value) {
    wemixSdkStore.setState(function (state) {
        var _a;
        return (__assign(__assign({}, state), (_a = {}, _a[key] = value, _a)));
    });
};
var initStore = function () { return wemixSdkStore.setState(function () { return cloneObject(INIT_STORE_DATA); }); };
export { wemixSdkStore, get, set, initStore };
