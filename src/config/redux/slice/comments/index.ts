import { createSlice } from '@reduxjs/toolkit';
import SLICE_NAMES from '../../constants/SLICE_NAMES';
import { getEmptyState } from './state';
import { fetchOfferComments } from './action';
import {
  getEmptyQueryState,
  setFulfilledState,
  setPendingState,
  setRejectedState,
  ThunkQuery,
} from '../../thunk';
import { PostedComment } from '../../../../domain/comment';

export const commentsSlice = createSlice({
  name: SLICE_NAMES.comments,
  initialState: getEmptyState(),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchOfferComments.pending, (s, a) => {
        s.offerComments[a.meta.arg as string] = setPendingState(
          getEmptyQueryState<PostedComment[]>()
        );
      })
      .addCase(fetchOfferComments.fulfilled, (s, a) => {
        setFulfilledState(
          s.offerComments[a.meta.arg as string] as ThunkQuery<PostedComment[]>,
          a.payload
        );
      })
      .addCase(fetchOfferComments.rejected, (s, a) => {
        setRejectedState(
          s.offerComments[a.meta.arg as string] as ThunkQuery<PostedComment[]>,
          a.payload
        );
      }),
});
