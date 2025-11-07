import { City } from '../city/types';
import { Position } from '../map/types';

type OfferType = 'apartment' | 'room';

interface Offer {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Position;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type { OfferType, Offer };
