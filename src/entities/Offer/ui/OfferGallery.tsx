import { FC } from 'react';

import type { Offer } from '../..';

import { Gallery } from '../../../shared/ui';

type OfferGalleryProps = {
  offer: Offer;
};

export const OfferGallery: FC<OfferGalleryProps> = ({ offer }) => {
  return <Gallery images={offer.previews} />;
};
