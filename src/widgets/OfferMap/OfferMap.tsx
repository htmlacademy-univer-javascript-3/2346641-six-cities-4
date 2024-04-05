import { useRef, type FC } from 'react';

import { type Offer, type Point } from 'entities';
import { useMap } from 'shared/hooks';

type OfferMapProps = {
  offer: Offer;
};

export const OfferMap: FC<OfferMapProps> = ({ offer }) => {
  const points: Point[] = offer.nearPlaces.map((nearPlace) => ({
    id: nearPlace.id,
    latitude: nearPlace.coords.latitude,
    longitude: nearPlace.coords.longitude,
  }));

  const mapRef = useRef(null);

  useMap(mapRef, offer.coords, points);

  return <section className="offer__map map" ref={mapRef}></section>;
};

OfferMap.displayName = 'OfferMap';
