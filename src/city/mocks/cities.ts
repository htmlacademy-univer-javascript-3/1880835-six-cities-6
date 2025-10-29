import cityNames from '../constants/cityNames';
import { City } from '../types';

export default [
  {
    name: cityNames.Paris,
    position: { longitude: 2.3488, latitude: 48.85341 },
  },
  {
    name: cityNames.Cologne,
    position: { longitude: 6.95, latitude: 50.93333 },
  },
  {
    name: cityNames.Brussels,
    position: { longitude: 4.34878, latitude: 50.85045 },
  },
  {
    name: cityNames.Amsterdam,
    position: { longitude: 4.88969, latitude: 52.37403 },
  },
  {
    name: cityNames.Hamburg,
    position: { longitude: 9.992895, latitude: 53.550688 },
  },
  {
    name: cityNames.Dusseldorf,
    position: { longitude: 6.77616, latitude: 51.2217 },
  },
] satisfies ReadonlyArray<City>;
