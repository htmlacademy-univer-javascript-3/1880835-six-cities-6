import { OfferDetails, OfferMeta } from '../../../../domain/offer';
import { ThunkQuery } from '../../thunk/types';

interface OffersSliceState {
  offers?: ThunkQuery<OfferMeta[]>;
  offer: Record<string, ThunkQuery<OfferDetails> | undefined>;
  nearbyOffers: Record<string, ThunkQuery<OfferMeta[]> | undefined>;
}

const emptyState = (): OffersSliceState => ({
  offer: {},
  nearbyOffers: {},
});

export { emptyState };
export type { OffersSliceState };
