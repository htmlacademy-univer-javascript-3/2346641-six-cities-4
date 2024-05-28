import type { FC } from 'react';

import type { ExtendedOffer } from '../model/types';

import { Gallery } from 'shared/ui';
import { PAGINATION } from 'shared/const';

type OfferGalleryProps = {
  offer: ExtendedOffer;
};

export const OfferGallery: FC<OfferGalleryProps> = ({ offer }) => {
  return (
    <Gallery images={offer.images.slice(0, PAGINATION.MAX_GALLERY_IMAGES)} />
  );
};
