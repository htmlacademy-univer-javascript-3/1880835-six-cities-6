import { ThunkQuery } from './types';

export function getEmptyQueryState<T = unknown>(): ThunkQuery<T> {
  return {
    isError: false,
    isFetched: false,
    isLoading: true,
  };
}
