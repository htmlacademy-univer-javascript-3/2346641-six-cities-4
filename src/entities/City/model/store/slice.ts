import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { City } from '../types';

import { CITIES } from 'shared/const';

const initialState: City = CITIES[0] as City;

const citySlice = createSlice({
  name: 'city',
  initialState: initialState,
  reducers: {
    setCity: (state, action: PayloadAction<City>) => {
      Object.assign(state, action.payload);
      return state;
    },
  },
});

export const cityReducer = citySlice.reducer;
export const cityActions = citySlice.actions;
