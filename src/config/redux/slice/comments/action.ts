import { PostedComment } from '../../../../domain/comment';
import { createAppAsyncThunk, getRejectValue } from '../../thunk';
import { ENDPOINTS } from '../../../axios';
import ACTION_NAMES from './constants/ACTION_NAMES';
import { AxiosError } from 'axios';
import HTTP_STATUS from '../../../axios/constants/HTTP_STATUS';
import ERROR_TYPES from '../../thunk/constants/ERROR_TYPES';

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
      if (
        error instanceof AxiosError &&
        error.response &&
        error.response.status === HTTP_STATUS.notFound
      ) {
        return rejectWithValue({
          type: ERROR_TYPES.notFound,
          cause: { message: `Comments for offer with ID ${offerID} not found` },
        });
      } else {
        return rejectWithValue(getRejectValue(error));
      }
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
