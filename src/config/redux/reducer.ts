import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './slice/auth';
import { errorSlice } from './slice/error';
import { offersSlice } from './slice/offers';
import { citiesSlice } from './slice/cities';
import { commentsSlice } from './slice/comments';
import { wrapReducer } from './utils/resetState';

const combinedReducers = combineReducers({
  auth: authSlice.reducer,
  error: errorSlice.reducer,
  offers: offersSlice.reducer,
  cities: citiesSlice.reducer,
  comments: commentsSlice.reducer,
});

export const reducer = wrapReducer(combinedReducers);
