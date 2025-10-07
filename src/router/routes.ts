export default {
  login: '/login',
  index: '/',
  offer: ({ id }: { id: number | ':id' }) => `/offer/${id}`,
  favorites: '/favorites',
} as const;
