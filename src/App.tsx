import { City } from './city/types';
import { Offer } from './offer/types';
import { Router } from './router';

export interface AppProps {
  auth: boolean;
  offers: Offer[];
  cities: City[];
}
export function App({ auth, offers, cities }: AppProps) {
  return <Router offers={offers} auth={auth} cities={cities} />;
}
