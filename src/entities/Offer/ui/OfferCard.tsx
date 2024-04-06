import type { FC, MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import type { OfferListItem } from '../model/types';

import { AddToBookmarksButton } from 'features';
import { capitalize } from 'shared/lib';
import { Card } from 'shared/ui';

type OfferCardProps = {
  className?: string;
  offer: OfferListItem;
  onMouseEnter?: MouseEventHandler<HTMLElement>;
  onMouseLeave?: MouseEventHandler<HTMLElement>;
};

export const OfferCard: FC<OfferCardProps> = ({
  className,
  offer,
  onMouseEnter,
  onMouseLeave,
}) => {
  const navigate = useNavigate();

  const onCardTitleClick = () => navigate(`/offer/${offer.id}`);
  const onAddToBookmarksButtonClick = () => {};

  return (
    <Card
      className={className}
      title={offer.title}
      footnote={capitalize(offer.type)}
      price={offer.price}
      rating={offer.rating}
      mark={offer.isPremium ? 'Premium' : ''}
      preview={{ src: offer.previewImage, alt: 'Place image' }}
      onClick={onCardTitleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      extraSlotContent={
        <AddToBookmarksButton
          className="place-card"
          checked={offer.isFavourite}
          onClick={onAddToBookmarksButtonClick}
        />
      }
    />
  );
};
