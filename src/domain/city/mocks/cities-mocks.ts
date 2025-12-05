import { City } from '../types';

export default {
  Paris: {
    name: 'Paris',
    location: {
      longitude: 0,
      latitude: 0,
      zoom: 30,
    },
  },
} as const satisfies { [key: string]: City };
