import { createSlice } from '@reduxjs/toolkit';
import SLICE_NAMES from '../../constants/SLICE_NAMES';
import { nearbyOffersThunk, offerThunk, offersThunk } from './action';
import { emptyState } from './state';
import { ThunkQuery } from '../../thunk/types';
import { OfferMeta } from '../../../../domain/offer';
import {
  getFulfilledState,
  getPendingState,
  getRejectedState,
} from '../../thunk';

export const offersSlice = createSlice({
  name: SLICE_NAMES.offers,
  initialState: emptyState(),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(offersThunk.pending, (s) => {
        s.offers = getPendingState();
      })
      .addCase(offersThunk.fulfilled, (s, a) => {
        s.offers = getFulfilledState(a.payload);
      })
      .addCase(offersThunk.rejected, (s, a) => {
        s.offers = getRejectedState(a.payload);
      })
      .addCase(offerThunk.pending, (s, a) => {
        s.offer[a.meta.arg as string] = getPendingState();
      })
      .addCase(offerThunk.fulfilled, (s, a) => {
        s.offer[a.meta.arg as string] = getFulfilledState(a.payload);
      })
      .addCase(offerThunk.rejected, (s, a) => {
        s.offer[a.meta.arg as string] = getRejectedState(a.payload);
      })
      .addCase(nearbyOffersThunk.pending, (s, a) => {
        s.nearbyOffers[a.meta.arg as string] = getPendingState();
      })
      .addCase(nearbyOffersThunk.fulfilled, (s, a) => {
        getFulfilledState(
          s.nearbyOffers[a.meta.arg as string] as ThunkQuery<OfferMeta[]>
        );
      })
      .addCase(nearbyOffersThunk.rejected, (s, a) => {
        s.nearbyOffers[a.meta.arg as string] = getRejectedState(a.payload);
      }),
});

export * from './action';
