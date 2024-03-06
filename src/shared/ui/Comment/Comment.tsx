import { FC } from 'react';

import { getHTMLDateTime, getMonthYear } from '../../lib';

import { Rating } from '..';

type CommentProps = {
  image: string;
  authorName: string;
  text: string;
  rating: number;
  date: Date;
};

export const Comment: FC<CommentProps> = ({
  image,
  authorName,
  text,
  rating,
  date,
}) => {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={image}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{authorName}</span>
      </div>
      <div className="reviews__info">
        <Rating className="reviews" rating={rating} />
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime={getHTMLDateTime(date)}>
          {getMonthYear(date)}
        </time>
      </div>
    </li>
  );
};
