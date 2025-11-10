import { State } from '../..';

export const selectAuthState = (s: State) => s.auth;

export const selectAuthStatus = (s: State) => selectAuthState(s).status;
