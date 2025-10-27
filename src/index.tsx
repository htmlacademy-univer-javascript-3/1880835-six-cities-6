import React from 'react';
import ReactDOM from 'react-dom/client';
import offers from './offer/mocks/offers';
import cities from './city/mocks/cities';
import { Router } from './router';
import { Provider } from 'react-redux';
import { store } from './redux';
import { setAuth, setCities, setOffers } from './redux/action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(setAuth(true));
store.dispatch(setCities(cities));
store.dispatch(setOffers(offers));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />;
    </Provider>
  </React.StrictMode>
);
