import { createAsyncThunk } from '@reduxjs/toolkit';

import type { OffersState, ResponseOffer } from '../model/types';

import { SixCities } from 'entities';
import { BASE_URL } from 'shared/const';
import { HttpService } from 'shared/services';

export const fetchOffers = createAsyncThunk<OffersState, void>(
  '/fetch-offers',
  async () => {
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

      result[city].push(offer);
    });

    return result;
  }
);
