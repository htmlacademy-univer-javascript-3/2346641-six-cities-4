import { createApi } from '@reduxjs/toolkit/query/react';
import { HttpService } from 'shared/services';
import type { Offer } from '../model/types';

export const OfferAPI = createApi({
  reducerPath: 'api/offer',
  baseQuery: HttpService.baseQuery(),
  endpoints: (build) => ({
    getOffers: build.query<Offer[], void>({
      query: () => '/offers',
    }),
  }),
});

export const { useGetOffersQuery } = OfferAPI;
