import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, AppProps } from './App';

const state: AppProps = {
  auth: false,
  places: [
    {
      bookmark: false,
      premium: true,
      imageSRC: 'img/apartment-01.jpg',
      price: 120,
      rating: 1,
      name: 'Beautiful & luxurious apartment at great location',
      type: 'apartment',
    },
    {
      bookmark: true,
      premium: false,
      imageSRC: 'img/room.jpg',
      price: 80,
      rating: 4,
      name: 'Wood and stone place',
      type: 'room',
    },
    {
      bookmark: false,
      premium: false,
      imageSRC: 'img/apartment-02.jpg',
      price: 132,
      rating: 4,
      name: 'Canal View Prinsengracht',
      type: 'apartment',
    },
    {
      bookmark: false,
      premium: true,
      imageSRC: 'img/apartment-03.jpg',
      price: 180,
      rating: 5,
      name: 'Nice, cozy, warm big bed apartment',
      type: 'apartment',
    },
    {
      bookmark: true,
      premium: false,
      imageSRC: 'img/room.jpg',
      price: 80,
      rating: 4,
      name: 'Wood and stone place',
      type: 'room',
    },
  ],
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App auth={state.auth} places={state.places} />
  </React.StrictMode>
);
