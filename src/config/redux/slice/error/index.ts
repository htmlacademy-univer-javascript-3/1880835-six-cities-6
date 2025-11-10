import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SLICE_NAMES from '../../constants/SLICE_NAMES';
import { getEmptyState } from './state';

export const errorSlice = createSlice({
  name: SLICE_NAMES.error,
  initialState: getEmptyState(),
  reducers: {
    setMessage(state, action: PayloadAction<string | undefined>) {
      state.message = action.payload;
    },
  },
});
