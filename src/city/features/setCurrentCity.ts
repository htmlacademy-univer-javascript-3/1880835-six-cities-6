import { City } from '../types';
import { store } from '../../config/redux';
import { citiesSlice } from '../../config/redux/slice/cities';

export function setCurrentCity(city: City) {
  store.dispatch(citiesSlice.actions.setCurrentCity(city));
}
