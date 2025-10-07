import { Offer } from './offer/types';
import { Router } from './router';

export interface AppProps {
  auth: boolean;
  offers: Offer[];
}
export function App({ auth, offers }: AppProps) {
  return <Router offers={offers} auth={auth} />;
}
