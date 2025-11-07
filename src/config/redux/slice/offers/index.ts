import { createSlice } from '@reduxjs/toolkit';
import SLICE_NAMES from '../../constants/SLICE_NAMES';
import { fetchOffers } from './action';
import { emptyState } from './state';

export const offersSlice = createSlice({
  name: SLICE_NAMES.offers,
  initialState: emptyState(),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchOffers.pending, (s) => {
        s.isLoading = true;
        s.error = null;
      })
      .addCase(fetchOffers.fulfilled, (s, a) => {
        s.isLoading = false;
        s.offers = a.payload;
      })
      .addCase(fetchOffers.rejected, (s, a) => {
        s.isLoading = false;
        s.error = a.payload as Error;
      }),
});

export * from './action';
