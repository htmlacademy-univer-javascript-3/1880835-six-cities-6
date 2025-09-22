import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppProps } from '../App';
import { Login } from '../pages/Login';
import { Main } from '../pages/Main';
import { Offer } from '../pages/Offer';
import { Favorites } from '../pages/Favorites';
import { Page404 } from '../pages/404';

export function PrivateRoute({
  access,
  children,
}: {
  access: boolean;
  children: JSX.Element;
}) {
  return access ? children : <Navigate to={'/login'} />;
}

export function Router({ places, auth }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main places={places} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute access={auth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
