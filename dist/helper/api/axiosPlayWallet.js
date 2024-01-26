"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestPlayWalletApi = void 0;
var axios_1 = require("axios");
var store_1 = require("../../store");
var requestPlayWalletApi = axios_1.default.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});
exports.requestPlayWalletApi = requestPlayWalletApi;
requestPlayWalletApi.interceptors.request.use(function (config) {
    var envConfig = (0, store_1.get)('envConfig');
    var accessToken = (0, store_1.get)('accessToken');
    if (envConfig && (envConfig === null || envConfig === void 0 ? void 0 : envConfig.walletUrl)) {
        config.baseURL = envConfig === null || envConfig === void 0 ? void 0 : envConfig.walletUrl;
    }
    if (accessToken) {
        config.headers['Authorization'] = "Bearer ".concat(accessToken);
    }
    return config;
});
