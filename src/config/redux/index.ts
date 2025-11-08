import { configureStore } from '@reduxjs/toolkit';
import { api } from '../axios';
import { ExtraArgument } from './thunk';
import { offersSlice } from './slice/offers';
import { citiesSlice } from './slice/cities';
import { OffersSliceState } from './slice/offers/state';
import { CitiesSliceState } from './slice/cities/state';

const store = configureStore({
  reducer: {
    offers: offersSlice.reducer,
    cities: citiesSlice.reducer,
  },
  middleware: (defaultMiddlewares) =>
    defaultMiddlewares({
      thunk: { extraArgument: { api } satisfies ExtraArgument },
    }),
});

interface State {
  offers: OffersSliceState;
  cities: CitiesSliceState;
}

type AppDispatch = typeof store.dispatch;

export { store };
export type { State, AppDispatch };
