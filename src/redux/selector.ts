import { Store } from '.';
import { City } from '../city/types';

export const selectAuth = (s: Store) => s.auth;

export const selectCurrentCity = (s: Store) => s.currentCity;

export const selectOffers = (s: Store) => s.offers;

export const selectCityOffers = (s: Store, city?: City) =>
  city ? s.offers.filter((o) => o.city === city.name) : [];

export const selectCities = (s: Store) => s.cities;
