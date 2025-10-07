import { Offer } from '../offer/types';
import { Favorites as FavoritesView } from '../offer/components/Favorites';
import { Header } from '../layout/Header';

export function Favorites({ offers }: { offers: Offer[] }) {
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
