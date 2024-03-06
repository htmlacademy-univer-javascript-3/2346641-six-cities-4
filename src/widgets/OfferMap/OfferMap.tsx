import { FC, useRef } from 'react';
import { type Point, type Offer } from '../../entities';
import { useMap } from '../../shared/hooks';

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
