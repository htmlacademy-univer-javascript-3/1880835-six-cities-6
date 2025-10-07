export default {
  login: '/login',
  cities: '/',
  city: ({ city }: { city: string }) => `/${city}`,
  offer: ({ id }: { id: number | ':id' }) => `/offer/${id}`,
  favorites: '/favorites',
} as const;
