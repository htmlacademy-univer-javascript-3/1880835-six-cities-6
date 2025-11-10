import { useSelector } from 'react-redux';
import { selectCitiesQuery } from '../../../config/redux/slice/cities/selector';
import { useAppDispatch } from '../../../config/redux/hooks/useAppDispatch';
import { useEffect } from 'react';
import { fetchOffers } from '../../../config/redux/slice/offers';

export function useCitiesQuery() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);
  return useSelector(selectCitiesQuery);
}
