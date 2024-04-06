import type { FC } from 'react';

import { ReviewComment } from 'entities';
import { useGetCommentsQuery } from 'entities/Comment';
import { CreateOfferReviewForm } from 'features';
import { Spinner } from 'shared/ui';

type OfferReviewsProps = {
  offerId: string;
};

export const OfferReviews: FC<OfferReviewsProps> = ({ offerId }) => {
  const { data, isLoading } = useGetCommentsQuery({ offerId });

  if (isLoading || !data) {
    return (
      <section className="offer__reviews reviews">
        <Spinner />
      </section>
    );
  }

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{data.length}</span>
      </h2>
      {data.length > 0 && (
        <ul className="reviews__list">
          {data.map((review) => (
            <ReviewComment key={review.id} review={review} />
          ))}
        </ul>
      )}
      <CreateOfferReviewForm offerId={offerId} />
    </section>
  );
};

OfferReviews.displayName = 'OfferReviews';
