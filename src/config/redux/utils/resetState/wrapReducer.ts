import { Action, Reducer } from '@reduxjs/toolkit';
import { resetStateAction } from '.';

export function wrapReducer<S, A extends Action>(reducer: Reducer<S, A>) {
  return (state: S | undefined, action: A) =>
    reducer(resetStateAction.match(action) ? undefined : state, action);
}
