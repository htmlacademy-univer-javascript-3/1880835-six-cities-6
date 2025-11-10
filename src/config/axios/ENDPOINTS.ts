const ENDPOINTS = {
  offers: 'offers',
  offer: (id: string) => `${ENDPOINTS.offers}/${id}`,
  nearbyOffers: (id: string) => `${ENDPOINTS.offer(id)}/nearby`,
} as const;

export default ENDPOINTS;
