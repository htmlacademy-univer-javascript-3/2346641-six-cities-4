import { configureStore } from '@reduxjs/toolkit';

import { cityReducer } from 'entities/City';
import { CommentAPI } from 'entities/Comment';
import { OfferAPI, offersReducer } from 'entities/Offer';
import { offerSortReducer } from 'features/SortOffers';
import { HttpService } from 'shared/services';

HttpService.configure();

export const store = configureStore({
  reducer: {
    city: cityReducer,
    offers: offersReducer,
    offerSort: offerSortReducer,
    [OfferAPI.reducerPath]: OfferAPI.reducer,
    [CommentAPI.reducerPath]: CommentAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(OfferAPI.middleware)
      .concat(CommentAPI.middleware),
});

export type TRootState = ReturnType<typeof store.getState>;
