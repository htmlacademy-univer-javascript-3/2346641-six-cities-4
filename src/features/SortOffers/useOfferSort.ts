import type { Offer } from 'entities';
import { useTypedSelector } from 'shared/hooks';

export const useOfferSort = () => {
  const currentSort = useTypedSelector((state) => state.offerSort);

  switch (currentSort) {
    case 'Popular':
      return undefined;
    case 'Price: high to low':
      return (a: Offer, b: Offer) => b.valuePerNight - a.valuePerNight;
    case 'Price: low to high':
      return (a: Offer, b: Offer) => a.valuePerNight - b.valuePerNight;
    case 'Top rated first':
      return (a: Offer, b: Offer) => b.rating - a.rating;
  }
};
