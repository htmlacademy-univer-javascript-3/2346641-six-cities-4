import type { FC } from 'react';

import { ReviewComment, type Review } from 'entities';
import { CreateOfferReviewForm } from 'features';
import { reviews } from 'shared/mocks';

type OfferReviewsProps = {
  offerId: string;
};

export const OfferReviews: FC<OfferReviewsProps> = ({ offerId }) => {
  const data = reviews as Review[];

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
