export interface AuthSliceState {
  status: boolean;
}

export function getEmptyState(): AuthSliceState {
  return {
    status: false,
  };
}
