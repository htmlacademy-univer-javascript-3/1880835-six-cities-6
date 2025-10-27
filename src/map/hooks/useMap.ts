import { RefObject, useEffect, useMemo, useRef } from 'react';
import {
  map as initMap,
  Map as LeafletMap,
  tileLayer,
  icon,
  marker,
  Marker,
} from 'leaflet';
import { Position } from '../types';
import defaultIconURL from '../assets/pin.svg?url';
import currentIconURL from '../assets/main-pin.svg?url';

const defaultIcon = icon({
  iconUrl: defaultIconURL,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentIcon = icon({
  iconUrl: currentIconURL,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function useMapRef({
  containerRef,
  position,
}: {
  containerRef: RefObject<HTMLElement>;
  position: Position;
}) {
  const mapRef = useRef<LeafletMap>();
  useEffect(() => {
    if (!mapRef.current && containerRef.current) {
      mapRef.current = initMap(containerRef.current).setView(
        [position.latitude, position.longitude],
        13
      );
      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapRef.current);
    }
  }, [containerRef, position]);
  return mapRef as RefObject<LeafletMap>;
}

function useMapPosition({
  position,
  mapRef,
}: {
  position: Position;
  mapRef: RefObject<LeafletMap>;
}) {
  useEffect(() => {
    if (mapRef.current) {
      const { lat, lng } = mapRef.current.getCenter();
      if (position.latitude !== lat || position.longitude !== lng) {
        mapRef.current.panTo({
          lat: position.latitude,
          lng: position.longitude,
        });
      }
    }
  }, [position, mapRef]);
}

function useLeafletMarkers({
  mapRef,
  markers,
}: {
  mapRef: RefObject<LeafletMap>;
  markers?: Position[];
}) {
  const result = useMemo(
    () =>
      markers
        ? markers
          .map(
            (m) =>
              mapRef.current &&
                marker(
                  { lat: m.latitude, lng: m.longitude },
                  { icon: defaultIcon }
                )
          )
          .filter((m) => m !== null)
        : [],
    [mapRef, markers]
  );
  useEffect(() => {
    result.forEach((m) => mapRef.current && m?.addTo(mapRef.current));
    return () => result.forEach((m) => m?.remove());
  }, [mapRef, result]);
  return result;
}

function useMapCurrentMarker({
  leafletMarkers,
  currentMarker,
}: {
  leafletMarkers?: Marker[];
  currentMarker?: Position;
}) {
  useEffect(() => {
    if (currentMarker) {
      const current = leafletMarkers?.find((m) => {
        const {lat, lng} = m.getLatLng();
        return lat === currentMarker.latitude && lng === currentMarker.longitude;
      });
      current?.setIcon(currentIcon);
      return () => {
        current?.setIcon(defaultIcon);
      };
    }
  }, [leafletMarkers, currentMarker]);
}

export function useMap({
  position,
  containerRef,
  markers,
  currentMarker,
}: {
  position: Position;
  containerRef: RefObject<HTMLElement>;
  markers?: Position[];
  currentMarker?: Position;
}) {
  const mapRef = useMapRef({ containerRef, position });
  const leafletMarkers = useLeafletMarkers({ mapRef, markers });
  useMapCurrentMarker({ leafletMarkers, currentMarker });
  useMapPosition({ mapRef, position });
}
