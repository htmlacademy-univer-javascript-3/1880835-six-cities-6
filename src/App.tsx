import { Place } from './place/types';
import { Router } from './router';

export interface AppProps {
  auth: boolean;
  places: Place[];
}
export function App({ places, auth }: AppProps) {
  return <Router places={places} auth={auth} />;
}
