import { configureStore } from '@reduxjs/toolkit';
import { offerSortReducer } from 'features/SortOffers';
import { cityReducer } from '../../entities/City';

export const store = configureStore({
  reducer: {
    city: cityReducer,
    offerSort: offerSortReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
