import axios from 'axios';
import ENDPOINTS from './ENDPOINTS';
import { selectAuthToken } from '../redux/slice/auth/selector';

const api = axios.create({
  baseURL: 'https://14.design.htmlacademy.pro/six-cities',
  timeout: 5000,
});

api.interceptors.request.use(async (config) => {
  const { store } = await import('../redux');
  const token = selectAuthToken(store.getState());
  if (token !== undefined) {
    config.headers['X-Token'] = token;
  }
  return config;
});

export { ENDPOINTS, api };
