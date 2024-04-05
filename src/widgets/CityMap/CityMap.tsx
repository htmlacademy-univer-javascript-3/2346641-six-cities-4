import { useRef, type FC } from 'react';

import type { City, Offer, Point } from 'entities';
import { useMap } from 'shared/hooks';

type CityMapProps = {
  city: City;
  offers: Offer[];
  selectedPoint?: Point;
};

export const CityMap: FC<CityMapProps> = ({ city, offers, selectedPoint }) => {
  const points: Point[] = offers.map((offer) => ({
    id: offer.id,
    latitude: offer.coords.latitude,
    longitude: offer.coords.longitude,
  }));

  const mapRef = useRef(null);

  useMap(mapRef, city, points, selectedPoint);

  return <section className="cities__map map" ref={mapRef} />;
};

CityMap.displayName = 'CityMap';
