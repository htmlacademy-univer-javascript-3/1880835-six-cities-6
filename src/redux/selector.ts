import { Store } from '.';

export const selectAuth = (s: Store) => s.auth;

export const selectCurrentCity = (s: Store) => s.currentCity;

export const selectOffers = (s: Store) => s.offers;

export const selectCities = (s: Store) => s.cities;
