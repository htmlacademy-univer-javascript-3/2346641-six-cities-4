import { FC, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

import type { City, Offer, Point } from '../../../entities';
import { useMap } from '../../../shared/hooks';

type CitiesMapProps = {
  city: City;
  offers: Offer[];
  selectedPoint?: Point;
};

export const CitiesMap: FC<CitiesMapProps> = ({
  city,
  offers,
  selectedPoint,
}) => {
  const points: Point[] = offers.map((offer) => ({
    id: offer.id,
    latitude: offer.coords.latitude,
    longitude: offer.coords.longitude,
  }));

  const mapRef = useRef(null);

  useMap(mapRef, city, points, selectedPoint);

  return <section className="cities__map map" ref={mapRef} />;
};
