import { Offer } from '../offer/types';
import { CityOffers } from '../offer/components/CityOffers';
import { Header } from '../layout/Header';
import { Map } from '../map';
import { useMemo, useState } from 'react';
import { Navbar } from '../city/components/Navbar';
import { useOffersQuery } from '../offer';
import { useCurrentCityFromParams } from '../city/hooks/useCurrentCityFromParams';
import { useCurrentCity } from '../city/hooks/useCurrentCity';
import { Loader } from '../ui/components/Loader';
import { Navigate } from 'react-router-dom';
import routes from '../router/routes';

export function Main() {
  useCurrentCityFromParams();
  const [currentOffer, setCurrentOffer] = useState<Offer>();
  const { offers, isLoading, isError } = useOffersQuery();
  const currentCity = useCurrentCity();
  const currentCityOffers = useMemo(
    () =>
      currentCity ? offers.filter((o) => o.city.name === currentCity.name) : [],
    [currentCity, offers]
  );
  const markers = useMemo(
    () =>
      currentCity
        ? currentCityOffers
          .filter((o) => o.city.name === currentCity.name)
          .map((o) => o.location)
        : [],
    [currentCity, currentCityOffers]
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) { // TODO: routes.error
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
                position={currentCity.location}
                markers={markers}
                currentMarker={currentOffer?.location}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
