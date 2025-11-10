export interface ErrorSliceState {
  message?: string;
}

export function getEmptyState(): ErrorSliceState {
  return {};
}
