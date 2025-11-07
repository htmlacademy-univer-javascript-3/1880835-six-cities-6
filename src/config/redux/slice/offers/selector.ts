import { State } from '../..';

export const selectOffersState = (s: State) => s.offers;

export const selectOffers = (s: State) => selectOffersState(s).offers;
