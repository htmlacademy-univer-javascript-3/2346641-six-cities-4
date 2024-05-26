import { createApi } from '@reduxjs/toolkit/query/react';

import type { Comment, CommentPayload } from '../model/types';

import { HttpService } from 'shared/services';

export const CommentAPI = createApi({
  reducerPath: 'api/comments',
  baseQuery: HttpService.baseQuery(),
  endpoints: (build) => ({
    getComments: build.query<Comment[], { offerId: string }>({
      query: (arg) => `/comments/${arg.offerId}`,
    }),
    addComment: build.mutation<
      void,
      { offerId: string; comment: CommentPayload }
    >({
      query: (arg) => ({
        url: `/comments/${arg.offerId}`,
        method: HttpService.HttpMethods.POST,
        data: arg.comment,
      }),
    }),
  }),
});

export const { useGetCommentsQuery, useAddCommentMutation } = CommentAPI;
