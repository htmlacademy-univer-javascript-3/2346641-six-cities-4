import type { Location } from 'shared/types';

export type SixCities =
  | 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Amsterdam'
  | 'Hamburg'
  | 'Dusseldorf';

export type City = {
  name: SixCities;
  location: Location;
};
