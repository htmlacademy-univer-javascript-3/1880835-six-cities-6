const ENDPOINTS = {
  offers: 'offers',
  offer: (id: string) => `${ENDPOINTS.offers}/${id}`,
} as const;

export default ENDPOINTS;
