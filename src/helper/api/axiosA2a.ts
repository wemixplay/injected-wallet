import axios from 'axios';
import { get } from '../../store';

const requestA2aApi = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

requestA2aApi.interceptors.request.use((config) => {
  const envConfig = get('envConfig');

  if (envConfig) {
    config.baseURL = envConfig?.a2aRelayUrl;
  }

  return config;
});

export { requestA2aApi };
