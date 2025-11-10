import { useSelector } from 'react-redux';
import { selectOffersQuery } from '../../../config/redux/slice/offers/selector';
import { fetchOffers } from '../../../config/redux/slice/offers';
import { useAppDispatch } from '../../../config/redux/hooks/useAppDispatch';
import { useEffect } from 'react';

export function useOffersQuery() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);
  return useSelector(selectOffersQuery);
}
