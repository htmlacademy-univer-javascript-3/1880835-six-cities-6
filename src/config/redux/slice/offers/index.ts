import { createSlice } from '@reduxjs/toolkit';
import SLICE_NAMES from '../../constants/SLICE_NAMES';
import { fetchNearbyOffers, fetchOffer, fetchOffers } from './action';
import { emptyState } from './state';
import { ThunkQuery } from '../../thunk/types';
import { Offer, OfferMeta } from '../../../../domain/offer';
import {
  getEmptyQueryState,
  setFulfilledState,
  setPendingState,
  setRejectedState,
} from '../../thunk';

export const offersSlice = createSlice({
  name: SLICE_NAMES.offers,
  initialState: emptyState(),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchOffers.pending, (s) => {
        s.offers = setPendingState(getEmptyQueryState<OfferMeta[]>());
      })
      .addCase(fetchOffers.fulfilled, (s, a) => {
        setFulfilledState(s.offers as ThunkQuery<OfferMeta[]>, a.payload);
      })
      .addCase(fetchOffers.rejected, (s, a) => {
        setRejectedState(s.offers as ThunkQuery<OfferMeta[]>, a.payload);
      })
      .addCase(fetchOffer.pending, (s, a) => {
        s.offer[a.meta.arg as string] = setPendingState(getEmptyQueryState());
      })
      .addCase(fetchOffer.fulfilled, (s, a) => {
        setFulfilledState(
          s.offer[a.meta.arg as string] as ThunkQuery<Offer>,
          a.payload
        );
      })
      .addCase(fetchOffer.rejected, (s, a) => {
        setRejectedState(
          s.offer[a.meta.arg as string] as ThunkQuery<Offer>,
          a.payload
        );
      })
      .addCase(fetchNearbyOffers.pending, (s, a) => {
        s.nearbyOffers[a.meta.arg as string] = setPendingState(
          getEmptyQueryState()
        );
      })
      .addCase(fetchNearbyOffers.fulfilled, (s, a) => {
        setFulfilledState(
          s.nearbyOffers[a.meta.arg as string] as ThunkQuery<OfferMeta[]>,
          a.payload
        );
      })
      .addCase(fetchNearbyOffers.rejected, (s, a) => {
        setRejectedState(
          s.nearbyOffers[a.meta.arg as string] as ThunkQuery<OfferMeta[]>,
          a.payload
        );
      }),
});

export * from './action';
