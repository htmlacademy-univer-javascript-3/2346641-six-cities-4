import type { FC } from 'react';

import type { ExtendedOffer } from '../model/types';

import { Gallery } from 'shared/ui';

type OfferGalleryProps = {
  offer: ExtendedOffer;
};

export const OfferGallery: FC<OfferGalleryProps> = ({ offer }) => {
  return <Gallery images={offer.images} />;
};
