import { createSlice } from '@reduxjs/toolkit';
import SLICE_NAMES from '../../constants/SLICE_NAMES';
import { getEmptyState } from './state';
import { offerCommentsThunk, postCommentThunk } from './action';
import {
  getEmptyQueryState,
  getFulfilledState,
  getPendingState,
  getRejectedState,
} from '../../thunk';

export const commentsSlice = createSlice({
  name: SLICE_NAMES.comments,
  initialState: getEmptyState(),
  reducers: {
    resetCommentPostQueryAction(s) {
      s.commentPost = getEmptyQueryState();
    },
  },
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
      })
      .addCase(postCommentThunk.pending, (s) => {
        s.commentPost = getPendingState();
      })
      .addCase(postCommentThunk.fulfilled, (s, a) => {
        const { offerId } = a.meta.arg as { offerId: string };
        s.commentPost = getFulfilledState(a.payload);
        if (s.offerComments[offerId] === undefined) {
          s.offerComments[offerId] = getEmptyQueryState();
          s.offerComments[offerId].data = [a.payload];
        } else {
          s.offerComments[offerId].data = s.offerComments[offerId].data
            ? [...s.offerComments[offerId].data, a.payload]
            : [a.payload];
        }
      })
      .addCase(postCommentThunk.rejected, (s, a) => {
        s.commentPost = getRejectedState(a.payload);
      }),
});
