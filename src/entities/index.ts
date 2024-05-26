export type { City, SixCities } from './city/model/types';
export type { Comment } from './comment/model/types';
export { ReviewComment } from './comment/ui/review-comment';
export type { ExtendedOffer, OfferListItem } from './offer/model/types';
export { OfferCard } from './offer/ui/offer-card';
export { OfferGallery } from './offer/ui/offer-gallery';

export type Person = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};
