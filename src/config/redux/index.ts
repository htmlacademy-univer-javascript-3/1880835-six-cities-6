import { configureStore } from '@reduxjs/toolkit';
import { api } from '../axios';
import { ExtraArgument } from './thunk';
import { offersSlice } from './slice/offers';
import { citiesSlice } from './slice/cities';

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

type State = ReturnType<typeof store.getState>;

export { store };
export type { State };
