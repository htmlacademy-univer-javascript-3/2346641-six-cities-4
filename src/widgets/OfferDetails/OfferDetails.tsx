import type { FC } from 'react';

import type { ExtendedOffer } from 'entities';
import { AddToBookmarksButton } from 'features';
import { capitalize } from 'shared/lib';
import { Rating } from 'shared/ui';

type OfferDetailsProps = {
  offer: ExtendedOffer;
};

export const OfferDetails: FC<OfferDetailsProps> = ({ offer }) => {
  const onAddToBookmarksClick = () => {};

  return (
    <>
      {offer.isPremium && (
        <div className="offer__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">{offer.title}</h1>
        <AddToBookmarksButton
          className="offer"
          checked={offer.isFavourite}
          onClick={onAddToBookmarksClick}
        />
      </div>
      <div className="offer__rating rating">
        <Rating className="offer" rating={offer.rating} />
        <span className="offer__rating-value rating__value">
          {offer.rating}
        </span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">
          {capitalize(offer.type)}
        </li>
        <li className="offer__feature offer__feature--bedrooms">
          {offer.bedrooms} Bedrooms
        </li>
        <li className="offer__feature offer__feature--adults">
          Max {offer.maxAdults} adults
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">&euro;{offer.price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
      {offer.goods && (
        <div className="offer__inside">
          <h2 className="offer__inside-title">What&apos;s inside</h2>
          <ul className="offer__inside-list">
            {offer.goods.map((item, index) => (
              <li className="offer__inside-item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

OfferDetails.displayName = 'OfferDetails';
