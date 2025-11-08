import { State } from '../..';

export const selectOffersState = (s: State) => s.offers;

export const selectOffersQuery = (s: State) => selectOffersState(s).offers;

export const selectOffers = (s: State) => selectOffersQuery(s).data;
