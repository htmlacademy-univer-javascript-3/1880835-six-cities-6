import { AxiosInstance } from 'axios';
import { selectAuthToken } from '../../slice/auth/selector';
import { store } from '../..';

export function addTokenInterceptor(instance: AxiosInstance) {
  instance.interceptors.request.use((config) => {
    const token = selectAuthToken(store.getState());
    if (token !== undefined) {
      config.headers['X-Token'] = token;
    }
    return config;
  });
}
