export type OfferHousehold = 'apartment' | 'room' | 'house' | 'hotel';

export type Person = {
  id: string;
  avatar: string;
  name: string;
  isPro: boolean;
};

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
};

export type Review = {
  id: string;
  author: Person;
  rating: number;
  date: Date;
  text: string;
};
