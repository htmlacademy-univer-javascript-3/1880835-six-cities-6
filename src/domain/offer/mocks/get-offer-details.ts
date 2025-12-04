import citiesMocks from '../../city/mocks/cities-mocks';
import { getUserMock } from '../../user/mocks/get-user-mock';
import { OfferDetails } from '../types';

export function getOfferDetails(): OfferDetails {
  return {
    id: '0',
    title: 'Offer',
    type: 'apartment',
    price: 1000,
    city: citiesMocks.Paris,
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 30,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    description: 'cool apartment',
    bedrooms: 4,
    goods: ['TV', 'chips'],
    host: getUserMock(),
    images: [
      'https://placehold.jp/150x150.png',
      'https://placehold.jp/150x150.png',
    ],
    maxAdults: 10,
  };
}
