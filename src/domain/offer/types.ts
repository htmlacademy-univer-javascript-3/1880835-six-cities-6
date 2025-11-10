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
}

interface OfferMeta extends Offer {
  previewImage: string;
}

interface OfferDetails extends Offer {
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
}

export type { OfferType, Offer, OfferMeta, OfferDetails };
