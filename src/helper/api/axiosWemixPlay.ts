import axios from 'axios';
import { get } from '../../store';

const requestWemixPlayApi = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

requestWemixPlayApi.interceptors.request.use((config) => {
  const baseUrl = get('baseUrl');
  const accessToken = get('accessToken');

  if (baseUrl) {
    config.baseURL = baseUrl;
  }

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
});

export { requestWemixPlayApi };
