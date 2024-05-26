import { configureStore } from '@reduxjs/toolkit';

import { cityReducer } from 'entities/city';
import { CommentAPI } from 'entities/comment';
import { OfferAPI, offersReducer } from 'entities/offer';
import { FavouritesAPI } from 'features/add-to-favourites';
import { AuthAPI, authReducer } from 'features/auth';
import { offerSortReducer } from 'features/sort-offers';
import { HttpService } from 'shared/services';

HttpService.configure();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    city: cityReducer,
    offers: offersReducer,
    offerSort: offerSortReducer,
    [AuthAPI.reducerPath]: AuthAPI.reducer,
    [OfferAPI.reducerPath]: OfferAPI.reducer,
    [CommentAPI.reducerPath]: CommentAPI.reducer,
    [FavouritesAPI.reducerPath]: FavouritesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(OfferAPI.middleware)
      .concat(CommentAPI.middleware)
      .concat(FavouritesAPI.middleware)
      .concat(AuthAPI.middleware),
});

export type TRootState = ReturnType<typeof store.getState>;
