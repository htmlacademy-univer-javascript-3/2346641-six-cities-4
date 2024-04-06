import { useRef, type FC } from 'react';

import { type ExtendedOffer, type OfferListItem, type Point } from 'entities';
import { useMap } from 'shared/hooks';

type OfferMapProps = {
  offer: ExtendedOffer;
  nearPlaces: OfferListItem[];
};

export const OfferMap: FC<OfferMapProps> = ({ offer, nearPlaces }) => {
  const points: Point[] = nearPlaces.map((nearPlace) => ({
    id: nearPlace.id,
    latitude: nearPlace.location.latitude,
    longitude: nearPlace.location.longitude,
  }));

  const mapRef = useRef(null);

  useMap(mapRef, offer.location, points);

  return <section className="offer__map map" ref={mapRef}></section>;
};

OfferMap.displayName = 'OfferMap';
