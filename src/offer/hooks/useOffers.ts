import { useSelector } from 'react-redux';
import { selectOffersState } from '../../config/redux/slice/offers/selector';

export function useOffersQuery() {
  return useSelector(selectOffersState);
}
