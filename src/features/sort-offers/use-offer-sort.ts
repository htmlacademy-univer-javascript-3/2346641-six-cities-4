import type { OfferListItem } from 'entities';
import { useTypedSelector } from 'shared/hooks';

export const useOfferSort = () => {
  const currentSort = useTypedSelector((state) => state.offerSort);

  switch (currentSort) {
    case 'Popular':
      return undefined;
    case 'Price: high to low':
      return (a: OfferListItem, b: OfferListItem) => b.price - a.price;
    case 'Price: low to high':
      return (a: OfferListItem, b: OfferListItem) => a.price - b.price;
    case 'Top rated first':
      return (a: OfferListItem, b: OfferListItem) => b.rating - a.rating;
  }
};
