import { configureStore } from '@reduxjs/toolkit';

import { cityReducer } from 'entities/City';
import { CommentAPI } from 'entities/Comment';
import { OfferAPI, offersReducer } from 'entities/Offer';
import { FavouritesAPI } from 'features/AddToFavourites';
import { AuthAPI, authReducer } from 'features/Auth';
import { offerSortReducer } from 'features/SortOffers';
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
