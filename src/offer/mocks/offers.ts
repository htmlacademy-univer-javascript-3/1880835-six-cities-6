import { Offer } from '../types';

export default [
  {
    id: 0,
    bookmark: false,
    premium: true,
    imageSRC: 'img/apartment-01.jpg',
    price: 120,
    rating: 1,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    city: 'Amsterdam',
    position: {
      longitude: 4.85309666406198,
      latitude: 52.3909553943508,
    },
    reviews: [
      {
        id: 0,
        user: {
          name: 'Max',
          avatar: '',
        },
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        rating: 4,
        postDate: '2019-04-01',
      },
    ],
  },
  {
    id: 1,
    bookmark: true,
    premium: false,
    imageSRC: 'img/room.jpg',
    price: 80,
    rating: 4,
    name: 'Wood and stone place',
    type: 'room',
    city: 'Amsterdam',
    position: {
      longitude: 4.85309666406198,
      latitude: 52.3609553943508,
    },
    reviews: [
      {
        id: 1,
        user: {
          name: 'Max',
          avatar: '',
        },
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        rating: 4,
        postDate: '2019-04-01',
      },
    ],
  },
  {
    id: 2,
    bookmark: false,
    premium: false,
    imageSRC: 'img/apartment-02.jpg',
    price: 132,
    rating: 4,
    name: 'Canal View Prinsengracht',
    type: 'apartment',
    city: 'Amsterdam',
    position: {
      longitude: 4.929309666406198,
      latitude: 52.3909553943508,
    },
    reviews: [
      {
        id: 2,
        user: {
          name: 'Max',
          avatar: '',
        },
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        rating: 4,
        postDate: '2019-04-01',
      },
    ],
  },
  {
    id: 3,
    bookmark: false,
    premium: true,
    imageSRC: 'img/apartment-03.jpg',
    price: 180,
    rating: 5,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    city: 'Amsterdam',
    position: {
      longitude: 4.969309666406198,
      latitude: 52.4809553943508,
    },
    reviews: [
      {
        id: 3,
        user: {
          name: 'Max',
          avatar: '',
        },
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        rating: 4,
        postDate: '2019-04-01',
      },
    ],
  },
  {
    id: 4,
    bookmark: true,
    premium: false,
    imageSRC: 'img/room.jpg',
    price: 80,
    rating: 4,
    name: 'Wood and stone place',
    type: 'room',
    city: 'Amsterdam',
    position: {
      longitude: 4.949309666406198,
      latitude: 52.3709553943508,
    },
    reviews: [
      {
        id: 4,
        user: {
          name: 'Max',
          avatar: '',
        },
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        rating: 4,
        postDate: '2019-04-01',
      },
    ],
  },
] satisfies ReadonlyArray<Offer>;
