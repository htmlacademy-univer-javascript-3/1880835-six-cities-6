import { OfferMeta } from '..';
import citiesMocks from '../../city/mocks/cities-mocks';
import offerTypes from '../constants/offer-types';

export function getOffersMetaMocks(): OfferMeta[] {
  return [
    {
      id: '0',
      previewImage: 'https://placehold.jp/150x150.png',
      title: 'Offer mock 0',
      type: offerTypes.apartment,
      price: 100,
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 30,
      },
      isFavorite: false,
      isPremium: false,
      rating: 4,
      city: citiesMocks.Paris,
    },
    {
      id: '1',
      previewImage: 'https://placehold.jp/150x150.png',
      title: 'Offer mock 1',
      type: offerTypes.room,
      price: 500,
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 30,
      },
      isFavorite: false,
      isPremium: false,
      rating: 2,
      city: citiesMocks.Paris,
    },
    {
      id: '2',
      previewImage: 'https://placehold.jp/150x150.png',
      title: 'Offer mock 2',
      type: offerTypes.apartment,
      price: 100,
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 30,
      },
      isFavorite: false,
      isPremium: true,
      rating: 3,
      city: citiesMocks.Paris,
    },
  ];
}
