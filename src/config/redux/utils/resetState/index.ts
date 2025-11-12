import { createAction } from '@reduxjs/toolkit';

export const RESET_STATE_ACTION_NAME = 'initialState/resetStore';

export const resetStateAction = createAction(RESET_STATE_ACTION_NAME);

export * from './wrapReducer';
