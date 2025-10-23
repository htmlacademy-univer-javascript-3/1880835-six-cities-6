import { City } from '../types';

export default [
  { name: 'Paris', position: { longitude: 2.3488, latitude: 48.85341 } },
  { name: 'Cologne', position: { longitude: 6.95, latitude: 50.93333 } },
  { name: 'Brussels', position: { longitude: 4.34878, latitude: 50.85045 } },
  { name: 'Amsterdam', position: { longitude: 4.88969, latitude: 52.37403 } },
  { name: 'Hamburg', position: { longitude: 9.992895, latitude: 53.550688 } },
  { name: 'Dusseldorf', position: { longitude: 6.77616, latitude: 51.2217 } },
] satisfies ReadonlyArray<City>;
