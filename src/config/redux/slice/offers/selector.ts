import { createSelector } from '@reduxjs/toolkit';
import { State } from '../..';
import { OfferDetails, OfferMeta } from '../../../../domain/offer';
import { getEmptyQueryState } from '../../thunk';

export const selectOffersState = (s: State) => s.offers;

export const selectOffersQuery = createSelector(
  [selectOffersState],
  (offers) => offers.offers ?? getEmptyQueryState<OfferMeta[]>()
);

export const selectOffers = createSelector(
  [selectOffersQuery],
  ({ data }) => data ?? []
);

export const selectOfferState = (s: State) => s.offers.offer;

export const selectOfferQuery = createSelector(
  [selectOfferState, (_state, offerID: string | undefined) => offerID],
  (offerState, offerID) =>
    offerID && offerState[offerID]
      ? offerState[offerID]
      : getEmptyQueryState<OfferDetails>()
);

export const selectNearbyOffersState = (s: State) => s.offers.nearbyOffers;

export const selectNearbyOffers = createSelector(
  [selectNearbyOffersState, (_state, offerID: string | undefined) => offerID],
  (nearbyOffersState, offerID) =>
    offerID && nearbyOffersState[offerID]
      ? nearbyOffersState[offerID]
      : getEmptyQueryState<OfferMeta[]>()
);
