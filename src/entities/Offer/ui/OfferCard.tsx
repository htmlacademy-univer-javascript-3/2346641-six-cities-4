import { FC, MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import type { Offer } from '../..';

import { Card } from '../../../shared/ui';
import { capitalize } from '../../../shared/lib';
import { AddToBookmarksButton } from '../../../features';

type OfferCardProps = {
  className?: string;
  offer: Offer;
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
      price={offer.valuePerNight}
      rating={offer.rating}
      mark={offer.isPremium ? 'Premium' : ''}
      preview={{ src: offer.previews[0], alt: 'Place image' }}
      onClick={onCardTitleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      extraSlotContent={
        <AddToBookmarksButton
          className="place-card"
          checked={offer.isBookmarked}
          onClick={onAddToBookmarksButtonClick}
        />
      }
    />
  );
};
