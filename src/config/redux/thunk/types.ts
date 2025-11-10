import { State } from '..';
import { api } from '../../axios';

export interface ExtraArgument {
  api: typeof api;
}

export interface ThunkConfig {
  state: State;
  rejectValue: string;
  extra: { api: typeof api };
}

export interface ThunkQuery<Data> {
  data?: Data;
  isFetched: boolean;
  isLoading: boolean;
  isError: boolean;
  error?: null | string;
}
