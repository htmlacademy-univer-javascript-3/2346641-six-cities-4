import { type FC } from 'react';

import { OfferCard, type Offer } from 'entities';
import { useOfferSort } from 'features/SortOffers';

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
  const sortFn = useOfferSort();

  const handleItemMouseEnter = (offer: Offer) => () =>
    onListItemMouseEnter?.(offer.id);

  const handleItemMouseLeave = (offer: Offer) => () =>
    onListItemMouseLeave?.(offer.id);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers &&
        offers
          .toSorted(sortFn)
          .map((offer) => (
            <OfferCard
              className="cities"
              offer={offer}
              key={offer.id}
              onMouseEnter={handleItemMouseEnter(offer)}
              onMouseLeave={handleItemMouseLeave(offer)}
            />
          ))}
    </div>
  );
};

OfferList.displayName = 'OfferList';
