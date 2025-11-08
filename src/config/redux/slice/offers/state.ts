import { Offer } from '../../../../domain/offer';

interface OffersState {
  offers: {
    data: Offer[];
    isLoading: boolean;
    isError: boolean;
    error: null | Error;
  };
}

const emptyState = (): OffersState => ({
  offers: {
    data: [],
    isLoading: false,
    isError: false,
    error: null,
  },
});

export { emptyState };
export type { OffersState };
