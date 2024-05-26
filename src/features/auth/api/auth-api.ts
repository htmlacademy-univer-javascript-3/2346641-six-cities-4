import { createApi } from '@reduxjs/toolkit/query/react';

import type { LoginData, ResponseUser } from '../model/types';

import { HttpService } from 'shared/services';

export const AuthAPI = createApi({
  reducerPath: 'api/auth',
  baseQuery: HttpService.baseQuery(),
  endpoints: (build) => ({
    getUserInfo: build.query<ResponseUser, void>({
      query: () => '/login',
    }),
    login: build.mutation<ResponseUser, LoginData>({
      query: (arg) => ({
        url: '/login',
        method: HttpService.HttpMethods.POST,
        data: arg,
      }),
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: '/login',
        method: HttpService.HttpMethods.DELETE,
      }),
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useLoginMutation,
  useLogoutMutation,
  useLazyGetUserInfoQuery,
} = AuthAPI;
