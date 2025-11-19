import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './domain/router/components/Router';
import { Provider } from 'react-redux';
import { store } from './config/redux';
import { restoreAuthDataFromLocalStorage } from './domain/auth/features/restoreAuthDataFromLocalStorage';

restoreAuthDataFromLocalStorage();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />;
    </Provider>
  </React.StrictMode>
);
