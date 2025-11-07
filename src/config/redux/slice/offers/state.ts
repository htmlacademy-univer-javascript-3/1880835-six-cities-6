import { Offer } from '../../../../domain/offer';

interface OffersState {
  offers: Offer[];
  isLoading: boolean;
  isError: boolean;
  error: null | Error;
}

const emptyState = (): OffersState => ({
  offers: [],
  isLoading: false,
  isError: false,
  error: null,
});

export { emptyState };
export type { OffersState };
