import { createSlice } from '@reduxjs/toolkit';
import SLICE_NAMES from '../../constants/SLICE_NAMES';
import { getEmptyState } from './state';
import { checkLoginThunk, loginThunk, signOutThunk } from './action';
import {
  getFulfilledState,
  getPendingState,
  getRejectedState,
} from '../../thunk';
import { getAuthDataFromLocalStorage } from './utils/localStorage';

export const authSlice = createSlice({
  name: SLICE_NAMES.auth,
  initialState: getEmptyState(),
  reducers: {
    restoreFromLocalStorage(state) {
      const authData = getAuthDataFromLocalStorage();
      if (authData !== null) {
        state.status = true;
        state.auth = getFulfilledState(authData);
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(checkLoginThunk.pending, (s) => {
        if (s.auth === undefined) {
          s.auth = getPendingState();
        } else {
          s.auth.isLoading = true;
        }
      })
      .addCase(checkLoginThunk.fulfilled, (s, a) => {
        s.status = a.payload !== undefined;
        s.auth =
          a.payload === undefined ? undefined : getFulfilledState(a.payload);
      })
      .addCase(checkLoginThunk.rejected, (s, a) => {
        s.status = false;
        s.auth = getRejectedState(a.payload);
      })
      .addCase(loginThunk.pending, (s) => {
        s.auth = getPendingState();
      })
      .addCase(loginThunk.fulfilled, (s, a) => {
        s.status = true;
        s.auth = getFulfilledState(a.payload);
      })
      .addCase(loginThunk.rejected, (s, a) => {
        s.status = false;
        s.auth = getRejectedState(a.payload);
      })
      .addCase(signOutThunk.pending, () => {}),
});
