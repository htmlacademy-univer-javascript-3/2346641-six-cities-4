import type { City, SixCities } from 'entities';
import type { Location } from 'shared/types';

export type OfferHousehold = 'apartment' | 'room' | 'house' | 'hotel';

export type BaseOffer = {
  id: string;
  title: string;
  type: OfferHousehold;
  price: number;
  location: Location;
  isFavourite: boolean;
  isPremium: boolean;
  rating: number;
};

export type OfferListItem = BaseOffer & {
  previewImage: string;
};

export type ExtendedOffer = BaseOffer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
};

export type ResponseOffer = OfferListItem & {
  city?: City;
};

export type OffersState = {
  [C in SixCities]: OfferListItem[];
};
