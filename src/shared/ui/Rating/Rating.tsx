import { FC } from 'react';

type RatingProps = {
  rating: number;
  className?: string;
};

export const Rating: FC<RatingProps> = ({ rating, className }) => {
  return (
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={{ width: `${rating * 20}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
};
