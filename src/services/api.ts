import axios from 'axios';
import { storage } from '~/utils/utils/constants';

export const api = axios.create({
  baseURL: `${process.env.API_URL}`,
});

api.interceptors.request.use((config) => {
  const token = storage.getItem('authToken');
  const customConfig = config;

  if (token) customConfig.headers.Authorization = `Bearer ${token}`;

  return customConfig;
});
