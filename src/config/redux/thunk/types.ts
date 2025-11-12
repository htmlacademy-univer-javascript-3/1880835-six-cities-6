import { State } from '..';
import { api } from '../../axios';

export interface ExtraArgument {
  api: typeof api;
}

export interface SerializedError {
  name: string;
  stack: string;
  message: string;
}

export interface RejectValue {
  type: string;
  cause?: Partial<SerializedError>;
}

export interface ThunkConfig {
  state: State;
  rejectValue: RejectValue;
  extra: { api: typeof api };
}

export interface ThunkQuery<Data> {
  data?: Data;
  isFetched: boolean;
  isLoading: boolean;
  isError: boolean;
  error?: RejectValue;
}
