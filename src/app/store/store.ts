import { configureStore } from '@reduxjs/toolkit';
import { cityReducer } from '../../entities/City';

export const store = configureStore({
  reducer: {
    city: cityReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
