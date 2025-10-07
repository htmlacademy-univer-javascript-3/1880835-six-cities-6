import { useMemo } from 'react';
import { Offer } from '../types';
import { Card } from './Card';

export function Favorites({ offers }: { offers: Offer[] }) {
  const citiesOffers = useMemo<Record<string, Offer[]>>(() => {
    const result: Record<string, Offer[]> = {};
    offers.forEach((o) =>
      result[o.city] ? result[o.city].push(o) : (result[o.city] = [o])
    );
    return result;
  }, [offers]);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(citiesOffers).map(([city, cityOffers]) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {cityOffers.map((offer) => (
                <Card key={offer.id} offer={offer} variant="favorites" />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
