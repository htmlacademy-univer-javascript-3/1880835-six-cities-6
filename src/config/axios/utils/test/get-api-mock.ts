import AxiosMockAdapter from 'axios-mock-adapter';
import { api } from '../..';

export function getApiMock() {
  return new AxiosMockAdapter(api);
}
