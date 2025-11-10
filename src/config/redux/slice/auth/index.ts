import { createSlice } from '@reduxjs/toolkit';
import SLICE_NAMES from '../../constants/SLICE_NAMES';
import { getEmptyState } from './state';

export const authSlice = createSlice({
  name: SLICE_NAMES.auth,
  initialState: getEmptyState(),
  reducers: {},
});
