import { getEmptyQueryState } from './getEmptyQuery';

export function getPendingState<T>() {
  return getEmptyQueryState<T>();
}

export function getFulfilledState<T>(payload: T) {
  const result = getEmptyQueryState<T>();
  result.data = payload;
  result.isFetched = true;
  result.isLoading = false;
  return result;
}

export function getRejectedState<T>(payload: string | undefined) {
  const result = getEmptyQueryState<T>();
  result.error = payload;
  result.isLoading = false;
  result.isFetched = true;
  result.isError = true;
  return result;
}
