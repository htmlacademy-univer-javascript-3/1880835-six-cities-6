import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, AppProps } from './App';
import offers from './offer/mocks/offers';

const state: AppProps = {
  offers,
  auth: false,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App auth={state.auth} offers={state.offers} />
  </React.StrictMode>
);
