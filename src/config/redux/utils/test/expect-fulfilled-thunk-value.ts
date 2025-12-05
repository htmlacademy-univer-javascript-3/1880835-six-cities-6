import { MockStoreEnhanced } from '@jedmao/redux-mock-store';
import { extractActionTypes } from '../action';
import { AsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export function expectFulfilledThunkValue<
  S,
  V,
  ThunkArg,
  ThunkApiConfig extends object
>({
  store,
  thunk,
  value,
}: {
  store: MockStoreEnhanced<S, PayloadAction<unknown, string>>;
  value: V;
  thunk: AsyncThunk<V, ThunkArg, ThunkApiConfig>;
}) {
  const [pendingAction, fulfilledAction] = store.getActions();
  expect(extractActionTypes([pendingAction, fulfilledAction])).toEqual([
    thunk.pending.type,
    thunk.fulfilled.type,
  ]);
  expect(fulfilledAction.payload).toEqual(value);
}
