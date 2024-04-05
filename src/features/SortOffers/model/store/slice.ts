import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { OfferSortType } from '../types';

const offerSortSlice = createSlice({
  name: 'offerSort',
  initialState: 'Popular' as OfferSortType,
  reducers: {
    setSortType: (state, action: PayloadAction<OfferSortType>) => {
      state = action.payload;
      return state;
    },
  },
});

export const offerSortReducer = offerSortSlice.reducer;
export const offerSortActions = offerSortSlice.actions;
