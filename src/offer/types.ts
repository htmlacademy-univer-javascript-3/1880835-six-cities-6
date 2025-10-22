export type OfferType = 'apartment' | 'room';

export interface Location {
  longitude: number;
  latitude: number;
}

export interface Offer {
  id: number;
  city: string;
  premium: boolean;
  imageSRC: string;
  price: number;
  rating: number;
  name: string;
  type: OfferType;
  bookmark: boolean;
  location: Location;
}
