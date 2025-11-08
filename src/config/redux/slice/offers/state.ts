import { Offer } from '../../../../domain/offer';

interface OffersSliceState {
  offers: {
    data: Offer[];
    isFetched: boolean;
    isLoading: boolean;
    isError: boolean;
    error: null | Error;
  };
}

const emptyState = (): OffersSliceState => ({
  offers: {
    data: [],
    isFetched: false,
    isLoading: false,
    isError: false,
    error: null,
  },
});

export { emptyState };
export type { OffersSliceState as OffersSliceState };
