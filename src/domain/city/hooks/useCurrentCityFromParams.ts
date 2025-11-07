import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCurrentCity } from './useCurrentCity';
import { useCitiesQuery } from './useCitiesQuery';
import { setCurrentCity } from '../features/setCurrentCity';

export function useCurrentCityFromParams() {
  const { city: cityParamsName } = useParams<{ city: string | undefined }>();
  const { data: cities } = useCitiesQuery();
  const currentCity = useCurrentCity();
  useEffect(() => {
    const cityParams = cities.find((c) => c.name === cityParamsName);
    if (cityParams !== undefined) {
      if (currentCity?.name !== cityParams.name) {
        setCurrentCity(cityParams);
      }
    }
  }, [cityParamsName, cities, currentCity]);
}
