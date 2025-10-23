import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppProps } from '../App';
import { Login } from '../pages/Login';
import { Main } from '../pages/Main';
import { Offer } from '../pages/Offer';
import { Favorites } from '../pages/Favorites';
import { Page404 } from '../pages/404';
import routes from './routes';

export function PrivateRoute({
  access,
  children,
}: {
  access: boolean;
  children: JSX.Element;
}) {
  return access ? children : <Navigate to={routes.login} />;
}

export function Router({ offers, auth, cities }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route
          path={routes.cities}
          element={<Main offers={offers} cities={cities} />}
        />
        <Route
          path={routes.city({ city: ':city' })}
          element={<Main offers={offers} cities={cities} />}
        />
        <Route
          path={routes.offer({ id: ':id' })}
          element={<Offer offers={offers} />}
        />
        <Route
          path={routes.favorites}
          element={
            <PrivateRoute access={auth}>
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path={routes.notFound} element={<Page404 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
