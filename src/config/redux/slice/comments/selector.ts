import { createSelector } from '@reduxjs/toolkit';
import { State } from '../..';
import { getEmptyQueryState, ThunkQuery } from '../../thunk';
import { PostedComment } from '../../../../domain/comment';

export const selectCommentsState = (s: State) => s.comments;

export const selectOfferCommentsState = (s: State) =>
  selectCommentsState(s).offerComments;

export const selectOfferCommentsQuery = createSelector(
  [selectOfferCommentsState, (_state, offerID: string | undefined) => offerID],
  (offerComments, offerID) =>
    offerID && offerComments[offerID]
      ? (offerComments[offerID] as ThunkQuery<PostedComment[]>)
      : getEmptyQueryState<PostedComment[]>()
);
