import axios from 'axios';
import { get } from '../../store';
var requestA2aApi = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});
requestA2aApi.interceptors.request.use(function (config) {
    var envConfig = get('envConfig');
    if (envConfig) {
        config.baseURL = envConfig === null || envConfig === void 0 ? void 0 : envConfig.a2aRelayUrl;
    }
    return config;
});
export { requestA2aApi };
