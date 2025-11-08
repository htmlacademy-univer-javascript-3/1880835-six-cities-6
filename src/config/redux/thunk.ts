import { State } from '.';
import { api } from '../axios';

export interface ExtraArgument {
  api: typeof api;
}

export interface ThunkConfig {
  state: State;
  rejectValue: Error;
  extra: { api: typeof api };
}
