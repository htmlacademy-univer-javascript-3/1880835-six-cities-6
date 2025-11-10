import { ThunkQuery } from './types';

export function setPendingState<T>(state: ThunkQuery<T>) {
  state.isFetched = false;
  state.isLoading = true;
  state.error = null;
  return state;
}

export function setFulfilledState<T>(state: ThunkQuery<T>, payload: T) {
  state.data = payload;
  state.isFetched = true;
  state.isLoading = false;
  return state;
}

export function setRejectedState<T>(state: ThunkQuery<T>, payload?: string) {
  state.isFetched = true;
  state.isLoading = false;
  state.isError = true;
  state.error = payload;
  return state;
}
