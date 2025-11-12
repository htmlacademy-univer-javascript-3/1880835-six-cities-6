import { getEmptyQueryState } from './getEmptyQuery';
import { RejectValue } from './types';

export function getPendingState<T>() {
  const result = getEmptyQueryState<T>();
  result.isLoading = true;
  return result;
}

export function getFulfilledState<T>(payload: T) {
  const result = getEmptyQueryState<T>();
  result.data = payload;
  result.isFetched = true;
  result.isLoading = false;
  return result;
}

export function getRejectedState<T>(payload: RejectValue | undefined) {
  const result = getEmptyQueryState<T>();
  result.error = payload;
  result.isLoading = false;
  result.isFetched = true;
  result.isError = true;
  return result;
}
