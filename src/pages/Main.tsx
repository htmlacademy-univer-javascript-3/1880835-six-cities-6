import { Offer } from '../domain/offer/types';
import { Header } from '../domain/ui/components/Header';
import { Map } from '../domain/map';
import { useMemo, useState } from 'react';
import { Navbar } from '../domain/city/components/Navbar';
import { useOffersQuery } from '../domain/offer';
import { useCurrentCityFromParams } from '../domain/city/hooks/useCurrentCityFromParams';
import { useCurrentCity } from '../domain/city/hooks/useCurrentCity';
import { Loader } from '../domain/ui/components/Loader';
import { Navigate } from 'react-router-dom';
import routes from '../domain/router/constants/ROUTES';
import { CityOffers } from '../domain/offer/components/CityOffers';
import { setErrorMessage } from '../domain/error/features/setErrorMessage';

export function Main() {
  useCurrentCityFromParams();
  const [currentOffer, setCurrentOffer] = useState<Offer>();
  const { data: offers, isLoading, isError, error } = useOffersQuery();
  const currentCity = useCurrentCity();
  const currentCityOffers = useMemo(
    () =>
      currentCity && offers
        ? offers.filter((o) => o.city.name === currentCity.name)
        : [],
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

  if (isError) {
    setErrorMessage(error);
    return <Navigate to={routes.error} />;
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
