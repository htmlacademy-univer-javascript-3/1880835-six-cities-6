import { Auth } from '../../../../domain/auth/types';
import { ThunkQuery } from '../../thunk';

export interface AuthSliceState {
  status: boolean;
  auth?: ThunkQuery<Auth>;
}

export function getEmptyState(): AuthSliceState {
  return {
    status: false,
  };
}
