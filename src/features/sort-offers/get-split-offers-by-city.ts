import type { SixCities } from 'entities';
import type { OfferListItem, ResponseOffer } from 'entities/offer';

export const getSplitOffersByCity = (data: ResponseOffer[]) => {
  const items: Record<string, OfferListItem[]> = {};

  data.forEach((offer) => {
    const city = offer.city?.name as SixCities;

    if (city in items) {
      items[city].push(offer);
    } else {
      items[city] = [offer];
    }
  });

  return items;
};
