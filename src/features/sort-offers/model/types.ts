export const offerSortTypes = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] as const;

export type OfferSortType = (typeof offerSortTypes)[number];
