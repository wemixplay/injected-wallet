import axios from 'axios';
import { get } from '../../store';
var requestPlayWalletApi = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});
requestPlayWalletApi.interceptors.request.use(function (config) {
    var envConfig = get('envConfig');
    var accessToken = get('accessToken');
    if (envConfig && (envConfig === null || envConfig === void 0 ? void 0 : envConfig.walletUrl)) {
        config.baseURL = envConfig === null || envConfig === void 0 ? void 0 : envConfig.walletUrl;
    }
    if (accessToken) {
        config.headers['Authorization'] = "Bearer ".concat(accessToken);
    }
    return config;
});
export { requestPlayWalletApi };
