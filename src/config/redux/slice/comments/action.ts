import { createAsyncThunk } from '@reduxjs/toolkit';
import { PostedComment } from '../../../../domain/comment';
import { ThunkConfig } from '../../thunk';
import { ENDPOINTS } from '../../../axios';

export const fetchOfferComments = createAsyncThunk<
  PostedComment[],
  string | undefined,
  ThunkConfig
>(
  ENDPOINTS.comments('unique'),
  async (offerID: string | undefined, { rejectWithValue, extra: { api } }) => {
    try {
      return (
        await api.get<PostedComment[]>(ENDPOINTS.comments(offerID as string))
      ).data;
    } catch (error) {
      rejectWithValue(
        `Не удалось получить список комментариев для предложения ${offerID}`
      );
      throw error;
    }
  },
  {
    condition: (offerID: string | undefined, { getState }) => {
      if (offerID === undefined) {
        return false;
      }
      const { comments } = getState();
      const currentComments = comments.offerComments[offerID];
      return currentComments === undefined;
    },
  }
);
