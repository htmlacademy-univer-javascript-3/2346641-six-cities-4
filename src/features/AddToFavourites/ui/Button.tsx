import { useState, type FC } from 'react';

import { useOffersActions, type BaseOffer } from 'entities/Offer';
import { useTypedSelector } from 'shared/hooks';
import { Icon, Spinner } from 'shared/ui';
import { useSetFavouriteStatusMutation } from '../api/favourites-api';

type ButtonProps = {
  offer: BaseOffer;
  className?: string;
};

export const Button: FC<ButtonProps> = ({ offer, className }) => {
  const [isLoading, setIsLoading] = useState(false);
  const favourites = useTypedSelector((state) => state.offers.favourites);
  const isFavourite = favourites.includes(offer.id);
  const { setFavourite } = useOffersActions();
  const [setStatus] = useSetFavouriteStatusMutation();

  const handleClick = () => {
    setIsLoading(true);
    setStatus({ offerId: offer.id, status: !isFavourite })
      .unwrap()
      .then(() => {
        setFavourite({ offer: offer, action: !isFavourite });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <button
      className={`${className}__bookmark-button ${
        isFavourite ? `${className}__bookmark-button--active` : ''
      } button`}
      type="button"
      onClick={handleClick}
    >
      {isLoading ? (
        <Spinner style={{ transform: 'scale(0.6) translateY(-10px)' }} />
      ) : (
        <Icon.Bookmark />
      )}
      <span className="visually-hidden">
        {isFavourite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
};
