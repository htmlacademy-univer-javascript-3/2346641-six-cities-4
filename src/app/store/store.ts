import { configureStore } from '@reduxjs/toolkit';

import { cityReducer } from 'entities/City';
import { OfferAPI } from 'entities/Offer';
import { offerSortReducer } from 'features/SortOffers';
import { HttpService } from 'shared/services';

HttpService.configure();

export const store = configureStore({
  reducer: {
    city: cityReducer,
    offerSort: offerSortReducer,
    [OfferAPI.reducerPath]: OfferAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(OfferAPI.middleware),
});

export type TRootState = ReturnType<typeof store.getState>;
