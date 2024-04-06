import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AuthAPI } from '../api/auth-api';
import type { AuthState, ResponseUser } from './types';

import { TokenService } from 'shared/services';

const handleLogin = (state: AuthState, action: PayloadAction<ResponseUser>) => {
  state.user = action.payload;
  state.token = action.payload.token;
  TokenService.save(action.payload.token);

  return state;
};

const handleLogout = (state: AuthState) => {
  state.user = null;
  state.token = null;
  TokenService.drop();

  return state;
};

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    auth: handleLogin,
  },
  extraReducers: (build) => {
    build.addMatcher(AuthAPI.endpoints.login.matchFulfilled, handleLogin);
    build.addMatcher(AuthAPI.endpoints.getUserInfo.matchFulfilled, handleLogin);
    build.addMatcher(AuthAPI.endpoints.logout.matchFulfilled, handleLogout);
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
