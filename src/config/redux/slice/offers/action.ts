import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, ENDPOINTS } from '../../../axios';
import { Offer } from '../../../../domain/offer';

export const fetchOffers = createAsyncThunk<
  Offer[],
  void,
  { rejectValue: Error; extra: { api: typeof api } }
>(ENDPOINTS.offers, async (_: void, { rejectWithValue, extra: { api: a } }) => {
  try {
    return (await a.get<Offer[]>(ENDPOINTS.offers)).data;
  } catch (cause) {
    return rejectWithValue(
      new Error('Не удалось получить список предложения', { cause })
    );
  }
});
