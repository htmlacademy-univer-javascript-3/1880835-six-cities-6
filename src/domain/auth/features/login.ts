import { store } from '../../../config/redux';
import { loginThunk as loginAction } from '../../../config/redux/slice/auth/action';
import { Credentials } from '../types';

export function login(credentials: Credentials) {
  store.dispatch(loginAction(credentials));
}
