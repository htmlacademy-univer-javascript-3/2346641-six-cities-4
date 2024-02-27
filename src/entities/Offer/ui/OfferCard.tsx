import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import type { Offer } from '../..';

import { Card } from '../../../shared/ui';
import { capitalize } from '../../../shared/lib';
import { AddToBookmarksButton } from '../../../features';

type OfferCardProps = {
  className?: string;
  offer: Offer;
};

export const OfferCard: FC<OfferCardProps> = ({ className, offer }) => {
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
      onTitleClick={onCardTitleClick}
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
