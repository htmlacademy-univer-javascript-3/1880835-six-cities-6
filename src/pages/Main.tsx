import { Offer } from '../offer/types';
import { CityOffers } from '../offer/components/CityOffers';
import { Header } from '../layout/Header';
import { Link, useParams } from 'react-router-dom';
import routes from '../router/routes';
import { classNames } from '../utils/classNames';
import { Map } from '../map';
import { City } from '../city/types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCities, selectOffers } from '../redux/auth';

export function Main() {
  const offers = useSelector(selectOffers);
  const cities = useSelector(selectCities);
  const { city } = useParams<{ city: string | undefined }>(); // TODO: currentCity
  const cityInfo = cities.find((c) => c.name === (city ?? 'Amsterdam')) as City;
  const [currentOffer, setCurrentOffer] = useState<Offer>();

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((c) => (
                <li key={c.name} className="locations__item">
                  <Link
                    className={classNames(
                      'locations__item-link tabs__item',
                      c.name === city ? 'tabs__item--active' : null
                    )}
                    to={routes.city({ city: c.name })}
                  >
                    <span>{c.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CityOffers offers={offers} setCurrentOffer={setCurrentOffer} />
            <div className="cities__right-section">
              <Map
                className="cities__map"
                position={cityInfo.position}
                markers={offers
                  .filter((o) => o.city === cityInfo.name)
                  .map((o) => o.position)}
                currentMarker={currentOffer?.position}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
