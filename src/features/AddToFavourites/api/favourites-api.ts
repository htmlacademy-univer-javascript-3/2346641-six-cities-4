import { createApi } from '@reduxjs/toolkit/query/react';

import type { ResponseOffer } from 'entities/Offer';
import { HttpService } from 'shared/services';

export const FavouritesAPI = createApi({
  reducerPath: 'api/favourites',
  baseQuery: HttpService.baseQuery(),
  endpoints: (build) => ({
    getFavourites: build.query<ResponseOffer[], void>({
      query: () => '/favorite',
    }),
    setFavouriteStatus: build.mutation<
      void,
      { offerId: string; status: boolean }
    >({
      query: (arg) => ({
        url: `/favorite/${arg.offerId}/${Number(arg.status)}`,
        method: HttpService.HttpMethods.POST,
      }),
    }),
  }),
});

export const { useGetFavouritesQuery, useSetFavouriteStatusMutation } =
  FavouritesAPI;
