import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, AppProps } from './App';
import offers from './offer/mocks/offers';
import cities from './city/mocks/cities';

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
    <App auth={state.auth} offers={state.offers} cities={cities} />
  </React.StrictMode>
);
