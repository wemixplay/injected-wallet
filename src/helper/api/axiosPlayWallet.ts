import axios from 'axios';
import { get } from '../../store';

const requestPlayWalletApi = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

requestPlayWalletApi.interceptors.request.use((config) => {
  const envConfig = get('envConfig');
  const accessToken = get('accessToken');

  if (envConfig && envConfig?.walletUrl) {
    config.baseURL = envConfig?.walletUrl;
  }

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
});

export { requestPlayWalletApi };
