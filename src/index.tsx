import React from 'react';
import ReactDOM from 'react-dom/client';
import offers from './offer/mocks/offers';
import cities from './city/mocks/cities';
import { Router } from './router';
import { Offer } from './offer/types';
import { City } from './city/types';

export interface AppProps {
  auth: boolean;
  offers: Offer[];
  cities: City[];
}
const state: AppProps = {
  offers,
  cities,
  auth: true,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router offers={state.offers} auth={state.auth} cities={state.cities} />;
  </React.StrictMode>
);
