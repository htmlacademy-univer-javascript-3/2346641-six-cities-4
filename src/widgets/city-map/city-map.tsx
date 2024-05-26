import { useRef, type FC } from 'react';

import type { City, OfferListItem } from 'entities';
import { useMap } from 'shared/hooks';
import type { Point } from 'shared/types';

type CityMapProps = {
  city: City;
  offers: OfferListItem[];
  selectedPoint?: Point;
};

export const CityMap: FC<CityMapProps> = ({ city, offers, selectedPoint }) => {
  const points: Point[] = offers.map((offer) => ({
    id: offer.id,
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
  }));

  const mapRef = useRef(null);

  useMap(mapRef, city.location, points, selectedPoint);

  return <section className="cities__map map" ref={mapRef} />;
};

CityMap.displayName = 'CityMap';
