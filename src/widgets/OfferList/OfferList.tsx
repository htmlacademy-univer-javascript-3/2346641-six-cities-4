import { memo } from 'react';

import { OfferCard, type OfferListItem } from 'entities';
import { useOfferSort } from 'features/SortOffers';

type OfferListProps = {
  offers?: OfferListItem[];
  onListItemMouseEnter?: (listItemId: string) => void;
  onListItemMouseLeave?: (listItemId: string) => void;
};

export const OfferList = memo(function OfferList(props: OfferListProps) {
  const { offers, onListItemMouseEnter, onListItemMouseLeave } = props;
  const sortFn = useOfferSort();

  const handleItemMouseEnter = (offer: OfferListItem) => () =>
    onListItemMouseEnter?.(offer.id);

  const handleItemMouseLeave = (offer: OfferListItem) => () =>
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
});
