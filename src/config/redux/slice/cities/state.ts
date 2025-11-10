import { City } from '../../../../domain/city';

interface CitiesSliceState {
  currentCity: City;
}

const getEmptyState = (): CitiesSliceState => ({
  currentCity: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
});

export { getEmptyState };
export type { CitiesSliceState };
