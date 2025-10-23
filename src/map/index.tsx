import 'leaflet/dist/leaflet.css';
import { classNames } from '../utils/classNames';

import { useRef } from 'react';
import { useMap } from './hooks/useMap';
import { Position } from './types';

export function Map({
  position,
  className,
  markers,
  currentMarker,
}: {
  position: Position;
  className?: string;
  markers?: Position[];
  currentMarker?: Position;
}) {
  const containerRef = useRef<HTMLElement>(null);
  useMap({ containerRef, position, markers, currentMarker });

  return (
    <section className={classNames('map', className)} ref={containerRef}>
      {}
    </section>
  );
}
