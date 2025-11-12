import { tryStringify } from '../../../utils/json';
import ERROR_TYPES from './constants/ERROR_TYPES';
import { SerializedError } from './types';

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
