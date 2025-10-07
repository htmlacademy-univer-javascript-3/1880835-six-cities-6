export type Rating = 0 | 1 | 2 | 3 | 4 | 5;
export type OfferType = 'apartment' | 'room';

export interface Offer {
  id: number;
  city: string;
  premium: boolean;
  imageSRC: string;
  price: number;
  rating: Rating;
  name: string;
  type: OfferType;
  bookmark: boolean;
}
