import { FC } from 'react';

import { OfferCard, type Offer } from '../../entities';

type OfferListProps = {
  offers?: Offer[];
  onListItemMouseEnter?: (listItemId: string) => void;
  onListItemMouseLeave?: (listItemId: string) => void;
};

export const OfferList: FC<OfferListProps> = ({
  offers,
  onListItemMouseEnter,
  onListItemMouseLeave,
}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers &&
        offers.map((offer) => (
          <OfferCard
            className="cities"
            offer={offer}
            key={offer.id}
            onMouseEnter={() => onListItemMouseEnter?.(offer.id)}
            onMouseLeave={() => onListItemMouseLeave?.(offer.id)}
          />
        ))}
    </div>
  );
};
