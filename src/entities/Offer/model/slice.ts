import { createSlice } from '@reduxjs/toolkit';

import { fetchOffers } from '../api/fetchOffers';
import type { OffersState } from './types';

type State = {
  status: 'idle' | 'loading' | 'failed' | 'succeeded';
  offers: OffersState;
};

const initialState: State = {
  status: 'idle',
  offers: {
    Paris: [],
    Cologne: [],
    Brussels: [],
    Amsterdam: [],
    Hamburg: [],
    Dusseldorf: [],
  },
};

const offersSlice = createSlice({
  name: 'offers',
  initialState: initialState,
  reducers: {
    placeholder: (state) => {
      return state;
    },
  },
  extraReducers: (build) => {
    build.addCase(fetchOffers.pending, (state) => {
      state.status = 'loading';
    });
    build.addCase(fetchOffers.rejected, (state) => {
      state.status = 'failed';
    });
    build.addCase(fetchOffers.fulfilled, (state, action) => {
      state.status = 'succeeded';
      Object.assign(state.offers, action.payload);
    });
  },
});

export const offersReducer = offersSlice.reducer;
export const offersActions = offersSlice.actions;
