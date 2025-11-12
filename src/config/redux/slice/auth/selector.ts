import { createSelector } from '@reduxjs/toolkit';
import { State } from '../..';
import { getEmptyQueryState } from '../../thunk';
import { Auth } from '../../../../domain/auth/types';

export const selectAuthState = (s: State) => s.auth;

export const selectAuthStatus = (s: State) => selectAuthState(s).status;

export const selectAuthToken = (s: State) =>
  selectAuthState(s).auth?.data?.token;

export const selectAuthQuery = createSelector(
  [selectAuthState],
  (authState) => authState.auth ?? getEmptyQueryState<Auth>()
);
