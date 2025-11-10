import { createAsyncThunk } from '@reduxjs/toolkit';
import { ENDPOINTS } from '../../../axios';
import { OfferDetails, OfferMeta } from '../../../../domain/offer';
import { ThunkConfig } from '../../thunk/types';

export const fetchOffers = createAsyncThunk<OfferMeta[], void, ThunkConfig>(
  ENDPOINTS.offers,
  async (_: void, { rejectWithValue, extra: { api } }) => {
    try {
      return (await api.get<OfferMeta[]>(ENDPOINTS.offers)).data;
    } catch (cause) {
      return rejectWithValue('Не удалось получить список предложения');
    }
  },
  {
    condition: (_: void, { getState }) => {
      const {
        offers: { offers },
      } = getState();
      return offers === undefined;
    },
  }
);

export const fetchOffer = createAsyncThunk<
  OfferDetails,
  string | undefined,
  ThunkConfig
>(
  ENDPOINTS.offer('unique'),
  async (offerID: string | undefined, { rejectWithValue, extra: { api } }) => {
    try {
      return (await api.get<OfferDetails>(ENDPOINTS.offer(offerID as string)))
        .data;
    } catch (cause) {
      return rejectWithValue(`Не удалось получить предложение с id ${offerID}`);
    }
  },
  {
    condition: (offerID: string | undefined, { getState }) => {
      if (offerID === undefined) {
        return false;
      }
      const {
        offers: { offer },
      } = getState();
      const currentOfferQuery = offer[offerID];
      return currentOfferQuery === undefined;
    },
  }
);

export const fetchNearbyOffers = createAsyncThunk<
  OfferMeta[],
  string | undefined,
  ThunkConfig
>(
  ENDPOINTS.nearbyOffers('unique'),
  async (offerID: string | undefined, { rejectWithValue, extra: { api } }) => {
    try {
      return (
        await api.get<OfferMeta[]>(ENDPOINTS.nearbyOffers(offerID as string))
      ).data;
    } catch (cause) {
      return rejectWithValue(
        `Не удалось получить ближайшие предложения для id ${offerID}`
      );
    }
  },
  {
    condition: (offerID: string | undefined, { getState }) => {
      if (offerID === undefined) {
        return false;
      }
      const {
        offers: { nearbyOffers },
      } = getState();
      const currentNearbyOffers = nearbyOffers[offerID];
      return currentNearbyOffers === undefined;
    },
  }
);
