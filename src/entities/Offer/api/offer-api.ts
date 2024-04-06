import { createApi } from '@reduxjs/toolkit/query/react';
import { HttpService } from 'shared/services';
import type { ExtendedOffer, OfferListItem } from '../model/types';

export const OfferAPI = createApi({
  reducerPath: 'api/offer',
  baseQuery: HttpService.baseQuery(),
  endpoints: (build) => ({
    getOffers: build.query<OfferListItem[], void>({
      query: () => '/offers',
    }),
    getOfferById: build.query<ExtendedOffer, { id: string }>({
      query: (arg) => `/offers/${arg.id}`,
    }),
    getNearbyOffers: build.query<OfferListItem[], { id: string }>({
      query: (arg) => `/offers/${arg.id}/nearby`,
    }),
  }),
});

export const {
  useGetOffersQuery,
  useGetOfferByIdQuery,
  useGetNearbyOffersQuery,
} = OfferAPI;
