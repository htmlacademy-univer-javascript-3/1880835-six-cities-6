import { useSelector } from 'react-redux';
import { selectCitiesQuery } from '../../../config/redux/slice/cities/selector';

export function useCitiesQuery() {
  return useSelector(selectCitiesQuery);
}
