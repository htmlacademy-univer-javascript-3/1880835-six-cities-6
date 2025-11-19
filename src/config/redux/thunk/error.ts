import { tryStringify } from '../../../utils/json';
import HTTP_STATUS from '../../axios/constants/HTTP_STATUS';
import ERROR_TYPES from './constants/ERROR_TYPES';
import { RejectValue, SerializedError } from './types';

export function serializeError(error: Error): Partial<SerializedError> {
  return {
    name: error.name,
    stack: error.stack,
    message: error.message,
  };
}

export function getRejectValue(error: unknown) {
  return {
    type: ERROR_TYPES.unknown,
    cause:
      error instanceof Error
        ? serializeError(error)
        : { message: tryStringify(error) },
  };
}

export function getErrorTypeByHTTPStatus(status: number) {
  switch (status) {
    case HTTP_STATUS.notFound:
      return ERROR_TYPES.notFound;
    case HTTP_STATUS.unauthorized:
      return ERROR_TYPES.unauthorized;
    case HTTP_STATUS.validationError:
      return ERROR_TYPES.validationFailed;
    case HTTP_STATUS.conflict:
      return ERROR_TYPES.conflict;
    default:
      return ERROR_TYPES.unknown;
  }
}

export function isValidationError(error?: RejectValue) {
  return error?.type === ERROR_TYPES.validationFailed;
}

export function isUnauthorizedError(error?: RejectValue) {
  return error?.type === ERROR_TYPES.unauthorized;
}

export function isNotFoundError(error?: RejectValue) {
  return error?.type === ERROR_TYPES.notFound;
}
