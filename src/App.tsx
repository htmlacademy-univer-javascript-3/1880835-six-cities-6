import { Main } from './pages/Main';
import { Place } from './place/types';

export interface AppProps {
  places: Place[];
}
export function App({ places }: AppProps) {
  return <Main places={places} />;
}
