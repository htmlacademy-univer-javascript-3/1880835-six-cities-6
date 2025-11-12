import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from './types';

export function createAppAsyncThunk<Returned, ThunkArg = void>(
  ...args: Parameters<typeof createAsyncThunk<Returned, ThunkArg, ThunkConfig>>
) {
  return createAsyncThunk<Returned, ThunkArg, ThunkConfig>(...args);
}
