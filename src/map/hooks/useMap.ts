import { RefObject, useEffect, useRef } from 'react';
import {
  map as initMap,
  Map as LeafletMap,
  tileLayer,
  icon,
  marker,
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

function useMapMarkers({
  mapRef,
  markers,
  currentMarker,
}: {
  mapRef: RefObject<LeafletMap>;
  markers?: Position[];
  currentMarker?: Position;
}) {
  useEffect(() => {
    if (markers) {
      const mapMarkers = markers.map(
        (m) =>
          mapRef.current &&
          marker(
            { lat: m.latitude, lng: m.longitude },
            { icon: m === currentMarker ? currentIcon : defaultIcon }
          ).addTo(mapRef.current)
      );
      return () => mapMarkers.forEach((m) => m?.remove());
    }
  }, [mapRef, markers, currentMarker]);
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
  useMapPosition({ mapRef, position });
  useMapMarkers({ mapRef, markers, currentMarker });
}
