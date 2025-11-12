import axios from 'axios';
import ENDPOINTS from './constants/ENDPOINTS.ts';

const api = axios.create({
  baseURL: 'https://14.design.htmlacademy.pro/six-cities',
  timeout: 5000,
});

export { ENDPOINTS, api };

export type * from './types.ts';
