import { useRef, type FC } from 'react';

import { type ExtendedOffer, type OfferListItem } from 'entities';
import { useMap } from 'shared/hooks';
import type { Point } from 'shared/types';

type OfferMapProps = {
  offer: ExtendedOffer;
  nearPlaces: OfferListItem[];
};

export const OfferMap: FC<OfferMapProps> = ({ offer, nearPlaces }) => {
  const offerPoint: Point = {
    id: offer.id,
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
  };

  const points: Point[] = nearPlaces
    .map((nearPlace) => ({
      id: nearPlace.id,
      latitude: nearPlace.location.latitude,
      longitude: nearPlace.location.longitude,
    }))
    .concat(offerPoint);

  const mapRef = useRef(null);

  useMap(mapRef, offer.location, points, offerPoint);

  return <section className="offer__map map" ref={mapRef}></section>;
};

OfferMap.displayName = 'OfferMap';
