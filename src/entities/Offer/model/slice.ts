import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchOffers } from '../api/fetchOffers';
import type { BaseOffer, OffersState } from './types';

type State = {
  status: 'idle' | 'loading' | 'failed' | 'succeeded';
  offers: OffersState;
  favourites: string[];
};

const initialState: State = {
  status: 'idle',
  favourites: [],
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
    setFavourite: (
      state,
      { payload }: PayloadAction<{ offer: BaseOffer; action: boolean }>
    ) => {
      if (payload.action) {
        state.favourites.push(payload.offer.id);
      } else {
        state.favourites = state.favourites.filter(
          (id) => id !== payload.offer.id
        );
      }
      return state;
    },
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
      state.favourites = action.payload.favourites;
      state.offers = action.payload.offers;
    });
  },
});

export const offersReducer = offersSlice.reducer;
export const offersActions = offersSlice.actions;
