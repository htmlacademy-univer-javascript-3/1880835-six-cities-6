import { Offer } from '../offer/types';
import { CityOffers } from '../offer/components/CityOffers';
import { Header } from '../layout/Header';
import { Navigate, useParams } from 'react-router-dom';
import routes from '../router/routes';
import { Map } from '../map';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectOffers } from '../packages/redux/selector';
import { useCityWithNameAsCurrent } from '../city/hooks/useCityWithNameAsCurrent';
import { Navbar } from '../city/components/Navbar';

export function Main() {
  const { city: cityName } = useParams<{ city: string | undefined }>();
  const [currentOffer, setCurrentOffer] = useState<Offer>();
  const currentCity = useCityWithNameAsCurrent(cityName);
  const offers = useSelector(selectOffers);
  const currentCityOffers = useMemo(
    () => (currentCity ? offers.filter((o) => o.city === currentCity.name) : []),
    [currentCity, offers]
  );
  const markers = useMemo(
    () =>
      currentCity
        ? currentCityOffers
          .filter((o) => o.city === currentCity.name)
          .map((o) => o.position)
        : [],
    [currentCity, currentCityOffers]
  );

  if (currentCity === undefined) {
    return <Navigate to={routes.notFound} />;
  }

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
