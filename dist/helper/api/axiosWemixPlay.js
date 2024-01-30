import axios from 'axios';
import { get } from '../../store';
var requestWemixPlayApi = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});
requestWemixPlayApi.interceptors.request.use(function (config) {
    var baseUrl = get('baseUrl');
    var accessToken = get('accessToken');
    if (baseUrl) {
        config.baseURL = baseUrl;
    }
    if (accessToken) {
        config.headers['Authorization'] = "Bearer ".concat(accessToken);
    }
    return config;
});
export { requestWemixPlayApi };
