import type { Person, Review } from '../..';

export type OfferHousehold = 'apartment' | 'room' | 'house' | 'hotel';

export type Offer = {
  id: string;
  previews: string[];
  title: string;
  city: string;
  description?: string[];
  isPremium: boolean;
  type: OfferHousehold;
  rating: number;
  numberOfBedrooms: number;
  maxGuests: number;
  valuePerNight: number;
  owner: Person;
  isBookmarked?: boolean;
  insideItems?: string[];
  reviews: Review[];
  coords: {
    latitude: number;
    longitude: number;
  };
};
