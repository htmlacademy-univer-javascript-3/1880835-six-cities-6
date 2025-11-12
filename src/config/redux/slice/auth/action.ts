import { Auth, Credentials } from '../../../../domain/auth/types';
import { ENDPOINTS } from '../../../axios';
import { selectAuthState, selectAuthToken } from './selector';
import { resetStateAction } from '../../utils/resetState';
import { AxiosError } from 'axios';
import ACTION_NAMES from './constants/ACTION_NAMES';
import { createAppAsyncThunk } from '../../thunk';

export const signOutThunk = createAppAsyncThunk<void>(
  ACTION_NAMES.signOut,
  (_, { dispatch }) => {
    dispatch(resetStateAction());
  }
);

export const checkLoginThunk = createAppAsyncThunk<Auth | undefined>(
  ACTION_NAMES.loginCheck,
  async (_, { rejectWithValue, getState, dispatch, extra: { api } }) => {
    const token = selectAuthToken(getState());
    if (token === undefined) {
      return undefined;
    }
    try {
      return (await api.get<Auth>(ENDPOINTS.login)).data;
    } catch (error) {
      if (error instanceof AxiosError && error.status === 401) {
        dispatch(signOutThunk());
      }
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue(JSON.stringify(error));
      }
    }
  },
  {
    condition: (_, { getState }) => {
      const authState = selectAuthState(getState());
      return authState === undefined || !authState.auth?.isLoading;
    },
  }
);

export const loginThunk = createAppAsyncThunk<Auth, Credentials>(
  ACTION_NAMES.login,
  async (credentials, { rejectWithValue, dispatch, extra: { api } }) => {
    try {
      const data = (await api.post<Auth>(ENDPOINTS.login, credentials)).data;
      dispatch(resetStateAction());
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue(JSON.stringify(error));
      }
    }
  }
);
