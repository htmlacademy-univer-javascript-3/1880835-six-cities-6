import { Offer } from '../offer/types';
import { CityOffers } from '../offer/components/CityOffers';
import { Header } from '../layout/Header';
import { Link, useParams } from 'react-router-dom';
import routes from '../router/routes';
import { classNames } from '../utils/classNames';

export function Main({ offers }: { offers: Offer[] }) {
  const { city } = useParams<{ city: string | undefined }>();

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {[
                'Paris',
                'Cologne',
                'Brussels',
                'Amsterdam',
                'Hamburg',
                'Dusseldorf',
              ].map((c) => (
                <li key={c} className="locations__item">
                  <Link
                    className={classNames(
                      'locations__item-link tabs__item',
                      c === city ? 'tabs__item--active' : null
                    )}
                    to={routes.city({ city: c })}
                  >
                    <span>{c}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CityOffers offers={offers} />
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
