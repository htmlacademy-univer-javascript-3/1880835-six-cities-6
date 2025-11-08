import { useSelector } from 'react-redux';
import { selectOffersQuery } from '../../../config/redux/slice/offers/selector';
import { fetchOffers } from '../../../config/redux/slice/offers';
import { useAppDispatch } from '../../../config/redux/hooks/useAppDispatch';

export function useOffersQuery() {
  const dispatch = useAppDispatch();
  dispatch(fetchOffers());
  return useSelector(selectOffersQuery);
}
