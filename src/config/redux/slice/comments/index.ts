import { createSlice } from '@reduxjs/toolkit';
import SLICE_NAMES from '../../constants/SLICE_NAMES';
import { getEmptyState } from './state';
import { offerCommentsThunk } from './action';
import {
  getFulfilledState,
  getPendingState,
  getRejectedState,
} from '../../thunk';

export const commentsSlice = createSlice({
  name: SLICE_NAMES.comments,
  initialState: getEmptyState(),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(offerCommentsThunk.pending, (s, a) => {
        s.offerComments[a.meta.arg as string] = getPendingState();
      })
      .addCase(offerCommentsThunk.fulfilled, (s, a) => {
        s.offerComments[a.meta.arg as string] = getFulfilledState(a.payload);
      })
      .addCase(offerCommentsThunk.rejected, (s, a) => {
        s.offerComments[a.meta.arg as string] = getRejectedState(a.payload);
      }),
});
