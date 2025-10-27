import { Offer } from '../offer/types';
import { CityOffers } from '../offer/components/CityOffers';
import { Header } from '../layout/Header';
import { Navigate, useParams } from 'react-router-dom';
import routes from '../router/routes';
import { Map } from '../map';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCityOffers } from '../redux/selector';
import { useCityWithNameAsCurrent } from '../city/hooks/useCityWithNameAsCurrent';
import { Store } from '../redux';
import { Navbar } from '../city/components/Navbar';

export function Main() {
  const { city: cityName } = useParams<{ city: string | undefined }>();
  const [currentOffer, setCurrentOffer] = useState<Offer>();
  const currentCity = useCityWithNameAsCurrent(cityName);
  const currentCityOffers = useSelector((s: Store) =>
    selectCityOffers(s, currentCity)
  );

  if (currentCity === undefined) {
    return <Navigate to={routes.notFound} />;
  }

  const markers = currentCityOffers
    .filter((o) => o.city === currentCity.name)
    .map((o) => o.position);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Navbar variant="locations" />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CityOffers
              city={currentCity}
              offers={currentCityOffers}
              setCurrentOffer={setCurrentOffer}
            />
            <div className="cities__right-section">
              <Map
                className="cities__map"
                position={currentCity.position}
                markers={markers}
                currentMarker={currentOffer?.position}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
