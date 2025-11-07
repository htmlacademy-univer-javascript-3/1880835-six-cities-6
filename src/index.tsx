import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './domain/router/components/Router';
import { Provider } from 'react-redux';
import { store } from './config/redux';
import { fetchOffers } from './config/redux/slice/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffers());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />;
    </Provider>
  </React.StrictMode>
);
