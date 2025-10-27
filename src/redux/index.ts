import { configureStore, createReducer } from '@reduxjs/toolkit';
import { Offer } from '../offer/types';
import { City } from '../city/types';
import { setAuth, setCities, setCurrentCity, setOffers } from './action';

export interface Store {
  auth: boolean;
  currentCity: string;
  offers: Offer[];
  cities: City[];
}

const emptyState = (): Store => ({
  auth: false,
  currentCity: 'Paris',
  offers: [],
  cities: [],
});

const reducer = createReducer(emptyState(), (b) =>
  b
    .addCase(setCities, (s, d) => {
      s.cities = d.payload;
      return s;
    })
    .addCase(setOffers, (s, d) => {
      s.offers = d.payload;
      return s;
    })
    .addCase(setAuth, (s, d) => {
      s.auth = d.payload;
      return s;
    })
    .addCase(setCurrentCity, (s, d) => {
      s.currentCity = d.payload;
      return s;
    })
);

export const store = configureStore({ reducer });
