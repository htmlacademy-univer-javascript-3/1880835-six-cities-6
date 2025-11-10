import { useMemo } from 'react';
import { OfferMeta } from '../types';
import { Card } from './Card/Card';

export function Favorites({ offers }: { offers: OfferMeta[] }) {
  const citiesOffers = useMemo<Record<string, OfferMeta[]>>(() => {
    const result: Record<string, OfferMeta[]> = {};
    offers.forEach((o) =>
      result[o.city.name]
        ? result[o.city.name].push(o)
        : (result[o.city.name] = [o])
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
                <Card
                  key={offer.id}
                  offer={offer}
                  imageURL={offer.previewImage}
                  variant="favorites"
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
