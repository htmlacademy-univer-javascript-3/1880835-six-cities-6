const ENDPOINTS = {
  login: 'login',
  offers: 'offers',
  offer: (id: string) => `${ENDPOINTS.offers}/${id}`,
  nearbyOffers: (id: string) => `${ENDPOINTS.offer(id)}/nearby`,
  comments: (id: string) => `comments/${id}`,
} as const;

export default ENDPOINTS;
