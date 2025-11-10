import { configureStore } from '@reduxjs/toolkit';
import { api } from '../axios';
import { ExtraArgument } from './thunk/types';
import { offersSlice } from './slice/offers';
import { citiesSlice } from './slice/cities';
import { OffersSliceState } from './slice/offers/state';
import { CitiesSliceState } from './slice/cities/state';
import { CommentsSliceState } from './slice/comments/state';
import { commentsSlice } from './slice/comments';

const store = configureStore({
  reducer: {
    offers: offersSlice.reducer,
    cities: citiesSlice.reducer,
    comments: commentsSlice.reducer,
  },
  middleware: (defaultMiddlewares) =>
    defaultMiddlewares({
      thunk: { extraArgument: { api } satisfies ExtraArgument },
    }),
});

interface State {
  offers: OffersSliceState;
  cities: CitiesSliceState;
  comments: CommentsSliceState;
}

type AppDispatch = typeof store.dispatch;

export { store };
export type { State, AppDispatch };
