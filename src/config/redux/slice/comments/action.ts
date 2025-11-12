import { PostedComment } from '../../../../domain/comment';
import { createAppAsyncThunk } from '../../thunk';
import { ENDPOINTS } from '../../../axios';
import ACTION_NAMES from './constants/ACTION_NAMES';

export const offerCommentsThunk = createAppAsyncThunk<
  PostedComment[],
  string | undefined
>(
  ACTION_NAMES.offerComments,
  async (offerID: string | undefined, { rejectWithValue, extra: { api } }) => {
    try {
      return (
        await api.get<PostedComment[]>(ENDPOINTS.comments(offerID as string))
      ).data;
    } catch (error) {
      return rejectWithValue(
        `Не удалось получить список комментариев для предложения ${offerID}`
      );
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
