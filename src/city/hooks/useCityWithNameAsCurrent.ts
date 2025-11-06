import { useDispatch, useSelector } from 'react-redux';
import { selectCities, selectCurrentCity } from '../../packages/redux/selector';
import { useEffect, useMemo } from 'react';
import { setCurrentCity } from '../../packages/redux/action';
import cityNames from '../constants/cityNames';

export function useCityWithNameAsCurrent(name: string = cityNames.Paris) {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities);
  const currentCityName = useSelector(selectCurrentCity);
  useEffect(() => {
    if (name !== currentCityName) {
      dispatch(setCurrentCity(name));
    }
  }, [name, currentCityName, dispatch]);
  const city = useMemo(
    () => cities.find((c) => c.name === name),
    [cities, name]
  );
  return city;
}
