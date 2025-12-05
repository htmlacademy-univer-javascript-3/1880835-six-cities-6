import { Credentials } from '../types';

export function getCredentialsMock(): Credentials {
  return { email: 'test@mail.com', password: '12345' };
}
