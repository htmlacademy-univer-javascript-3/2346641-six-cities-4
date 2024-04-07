export type { City, SixCities } from './City/model/types';
export type { Comment } from './Comment/model/types';
export { ReviewComment } from './Comment/ui/ReviewComment';
export type { ExtendedOffer, OfferListItem } from './Offer/model/types';
export { OfferCard } from './Offer/ui/OfferCard';
export { OfferGallery } from './Offer/ui/OfferGallery';

export type Person = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};
