import { FC } from 'react';

import { Comment } from '../../../shared/ui';

import type { Review } from '../..';

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
