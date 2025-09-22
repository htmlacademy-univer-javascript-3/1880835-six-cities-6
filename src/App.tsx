import { Page404 } from './pages/404';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { Offer } from './pages/Offer';
import { Place } from './place/types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export interface AppProps {
  places: Place[];
}
export function App({ places }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main places={places} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
