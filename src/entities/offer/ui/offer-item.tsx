import type { FC } from 'react';
import type { OfferListItem } from '../model/types';

import { AddToFavouritesButton } from 'features';
import { Rating } from 'shared/ui';
import { capitalize } from 'shared/lib';

export const OfferItem: FC<{
  offer: OfferListItem;
  onFavouriteClick?: VoidFunction;
}> = ({ offer, onFavouriteClick }) => {
  return (
    <article className="favorites__card place-card">
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <AddToFavouritesButton
            className="place-card"
            offer={offer}
            onClick={onFavouriteClick}
          />
        </div>
        <Rating className="place-card" rating={offer.rating} />
        <h2 className="place-card__name">{offer.title}</h2>
        <p className="place-card__type">{capitalize(offer.type)}</p>
      </div>
    </article>
  );
};
