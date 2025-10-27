import { createAction } from '@reduxjs/toolkit';
import { City } from '../city/types';
import { Offer } from '../offer/types';

export const Action = {
  SET_CITIES: 'SET_CITIES',
  SET_OFFERS: 'SET_OFFERS',
  SET_AUTH: 'SET_AUTH',
  SET_CURRENT_CITY: 'SET_CURRENT_CITY',
} as const;

export const setCities = createAction(Action.SET_CITIES, (value: City[]) => ({
  payload: value,
}));

export const setOffers = createAction(Action.SET_OFFERS, (value: Offer[]) => ({
  payload: value,
}));

export const setAuth = createAction(Action.SET_AUTH, (value: boolean) => ({
  payload: value,
}));

export const setCurrentCity = createAction(
  Action.SET_CURRENT_CITY,
  (value: string) => ({ payload: value })
);
