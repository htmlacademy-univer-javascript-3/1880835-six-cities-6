import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Main } from '../pages/Main';
import { Offer } from '../pages/Offer';
import { Favorites } from '../pages/Favorites';
import { Page404 } from '../pages/404';
import routes from './routes';
import { useSelector } from 'react-redux';
import { selectAuth } from '../packages/redux/selector';

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const auth = useSelector(selectAuth);
  return auth ? children : <Navigate to={routes.login} />;
}

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.cities} element={<Main />} />
        <Route path={routes.city({ city: ':city' })} element={<Main />} />
        <Route path={routes.offer({ id: ':id' })} element={<Offer />} />
        <Route
          path={routes.favorites}
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={routes.notFound} element={<Page404 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
