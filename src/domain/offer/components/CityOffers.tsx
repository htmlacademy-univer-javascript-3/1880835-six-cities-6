import { Dispatch, SetStateAction, useMemo } from 'react';
import { Offer } from '../types';
import { Card } from './Card/Card';
import { City } from '../../city/types';
import { SortSelect } from './SortSelect';
import { useSortSelectOptions } from './SortSelect/hooks/useSortSelectOptions';
import { comparatorBySortType } from '../helpers/comparatorBySortType';

export function CityOffers({
  city,
  offers,
  setCurrentOffer,
}: {
  city: City;
  offers: Offer[];
  setCurrentOffer: Dispatch<SetStateAction<Offer | undefined>>;
}) {
  const { select, selectedOption } = useSortSelectOptions();
  const comparator = useMemo(
    () => comparatorBySortType(selectedOption.value),
    [selectedOption]
  );
  const sortedOffers = useMemo(
    () => offers.toSorted(comparator),
    [comparator, offers]
  );
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {sortedOffers.length} places to stay in {city.name}
      </b>
      <SortSelect select={select} />
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.map((o) => (
          <Card key={o.id} offer={o} onMouseEnter={() => setCurrentOffer(o)} />
        ))}
      </div>
    </section>
  );
}
