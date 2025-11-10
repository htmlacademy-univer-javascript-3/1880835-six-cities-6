import { Favorites as FavoritesView } from '../domain/offer/components/Favorites';
import { Header } from '../domain/ui/layout/Header';
import { useOffersQuery } from '../domain/offer';
import { Loader } from '../domain/ui/components/Loader';
import { Navigate } from 'react-router-dom';
import routes from '../domain/router/constants/ROUTES';
import { setErrorMessage } from '../domain/error/features/setErrorMessage';

export function Favorites() {
  const { data: offers, isLoading, isError, error } = useOffersQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError || offers === undefined) {
    setErrorMessage(error);
    return <Navigate to={routes.error} />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesView offers={offers} />
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}
