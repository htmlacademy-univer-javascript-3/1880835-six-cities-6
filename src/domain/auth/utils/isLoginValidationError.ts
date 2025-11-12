import { RejectValue } from '../../../config/redux/thunk';
import ERROR_TYPES from '../../../config/redux/slice/auth/constants/ERROR_TYPES';

export function isLoginValidationError(error?: RejectValue) {
  return error?.type === ERROR_TYPES.loginValidationError;
}
