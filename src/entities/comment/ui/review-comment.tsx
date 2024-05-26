import type { FC } from 'react';

import { type Comment as TComment } from '../model/types';

import { Comment } from 'shared/ui';

type ReviewCommentProps = {
  review: TComment;
};

export const ReviewComment: FC<ReviewCommentProps> = ({ review }) => {
  return (
    <Comment
      authorName={review.user.name}
      date={review.date}
      image={review.user.avatarUrl}
      rating={review.rating}
      text={review.comment}
    />
  );
};
