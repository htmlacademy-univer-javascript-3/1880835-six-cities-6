import { createAsyncThunk } from '@reduxjs/toolkit';
import { ENDPOINTS } from '../../../axios';
import { Offer } from '../../../../domain/offer';
import { ThunkConfig } from '../../thunk';

export const fetchOffers = createAsyncThunk<Offer[], void, ThunkConfig>(
  ENDPOINTS.offers,
  async (_: void, { rejectWithValue, extra: { api: a } }) => {
    try {
      return (await a.get<Offer[]>(ENDPOINTS.offers)).data;
    } catch (cause) {
      return rejectWithValue(
        new Error('Не удалось получить список предложения', { cause })
      );
    }
  },
  {
    condition: (_: void, { getState }) => {
      const {
        offers: {
          offers: { isLoading, isFetched },
        },
      } = getState();
      return !isLoading && !isFetched;
    },
  }
);
