import { createAsyncThunk } from '@reduxjs/toolkit';

import type { OffersState, ResponseOffer } from '../model/types';

import { SixCities } from 'entities';
import { BASE_URL } from 'shared/const';
import { HttpService } from 'shared/services';

type ReturnType = {
  offers: OffersState;
  favourites: string[];
};

export const fetchOffers = createAsyncThunk<ReturnType, void>(
  '/fetch-offers',
  async () => {
    const favourites: string[] = [];
    const result: OffersState = {
      Paris: [],
      Cologne: [],
      Brussels: [],
      Amsterdam: [],
      Hamburg: [],
      Dusseldorf: [],
    };

    const response = await HttpService.getAxiosClient().get(
      `${BASE_URL}/offers`
    );

    response.data.forEach((offer: ResponseOffer) => {
      const city = offer.city?.name as SixCities;
      delete offer.city;

      if (offer.isFavorite) {
        favourites.push(offer.id);
      }
      delete offer.isFavorite;

      result[city].push(offer);
    });

    return { offers: result, favourites: favourites };
  }
);
