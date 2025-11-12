import { ENDPOINTS } from '../../../axios';
import { OfferDetails, OfferMeta } from '../../../../domain/offer';
import { createAppAsyncThunk, getRejectValue } from '../../thunk';
import ACTION_NAMES from './constants/ACTION_NAMES';

export const offersThunk = createAppAsyncThunk<OfferMeta[]>(
  ACTION_NAMES.offers,
  async (_: void, { rejectWithValue, extra: { api } }) => {
    try {
      return (await api.get<OfferMeta[]>(ENDPOINTS.offers)).data;
    } catch (error) {
      return rejectWithValue(getRejectValue(error));
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

export const offerThunk = createAppAsyncThunk<OfferDetails, string | undefined>(
  ACTION_NAMES.offer,
  async (offerID: string | undefined, { rejectWithValue, extra: { api } }) => {
    try {
      return (await api.get<OfferDetails>(ENDPOINTS.offer(offerID as string)))
        .data;
    } catch (error) {
      return rejectWithValue(getRejectValue(error));
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

export const nearbyOffersThunk = createAppAsyncThunk<
  OfferMeta[],
  string | undefined
>(
  ACTION_NAMES.nearbyOffers,
  async (offerID: string | undefined, { rejectWithValue, extra: { api } }) => {
    try {
      return (
        await api.get<OfferMeta[]>(ENDPOINTS.nearbyOffers(offerID as string))
      ).data;
    } catch (error) {
      return rejectWithValue(getRejectValue(error));
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
