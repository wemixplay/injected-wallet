"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestA2aApi = void 0;
var axios_1 = require("axios");
var store_1 = require("../../store");
var requestA2aApi = axios_1.default.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});
exports.requestA2aApi = requestA2aApi;
requestA2aApi.interceptors.request.use(function (config) {
    var envConfig = (0, store_1.get)('envConfig');
    if (envConfig) {
        config.baseURL = envConfig === null || envConfig === void 0 ? void 0 : envConfig.a2aRelayUrl;
    }
    return config;
});
