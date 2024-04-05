import type { FC } from 'react';

import type { Review } from '../model/types';

import { Comment } from 'shared/ui';

type ReviewCommentProps = {
  review: Review;
};

export const ReviewComment: FC<ReviewCommentProps> = ({ review }) => {
  return (
    <Comment
      authorName={review.author.name}
      date={review.date}
      image={review.author.avatar}
      rating={review.rating}
      text={review.text}
    />
  );
};
