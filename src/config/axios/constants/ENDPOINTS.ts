const ENDPOINTS = {
  login: 'login',
  offers: 'offers',
  favorite: 'favorite',
  offer: (id: string) => `${ENDPOINTS.offers}/${id}`,
  nearbyOffers: (id: string) => `${ENDPOINTS.offer(id)}/nearby`,
  comments: (id: string) => `comments/${id}`,
  offerFavoriteState: ({
    offerId,
    isFavorite,
  }: {
    offerId: string;
    isFavorite: boolean;
  }) => `${ENDPOINTS.favorite}/${offerId}/${isFavorite ? 1 : 0}`,
} as const;

export default ENDPOINTS;
