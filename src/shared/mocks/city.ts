import { offers } from './offers';

export const city = {
  title: 'Amsterdam',
  latitude:
    offers.reduce((acc, offer) => acc + offer.coords.latitude, 0) /
    offers.length,
  longitude:
    offers.reduce((acc, offer) => acc + offer.coords.longitude, 0) /
    offers.length,
};
