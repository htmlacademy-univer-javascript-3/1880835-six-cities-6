import { useSelector } from 'react-redux';
import { selectOffersQuery } from '../../../config/redux/slice/offers/selector';

export function useOffersQuery() {
  return useSelector(selectOffersQuery);
}
