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
    var baseUrl = (0, store_1.get)('baseUrl');
    var accessToken = (0, store_1.get)('accessToken');
    if (baseUrl) {
        config.baseURL = baseUrl;
    }
    if (accessToken) {
        config.headers['Authorization'] = "Bearer ".concat(accessToken);
    }
    return config;
});
