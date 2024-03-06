import { FC, MouseEventHandler, ReactNode } from 'react';

import { Rating } from '..';

type CardProps = {
  title: string;
  footnote: string;
  price: number;
  rating: number;
  mark?: string;
  preview?: {
    src: string;
    alt: string;
  };
  onClick?: VoidFunction;
  extraSlotContent?: ReactNode;
  className?: string;

  onMouseEnter?: MouseEventHandler<HTMLElement>;
  onMouseLeave?: MouseEventHandler<HTMLElement>;
};

export const Card: FC<CardProps> = ({
  title,
  footnote,
  price,
  rating,
  mark,
  preview,
  onClick,
  extraSlotContent,
  className,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {mark && (
        <div className="place-card__mark">
          <span>{mark}</span>
        </div>
      )}
      {preview && (
        <div
          className={`${className}__image-wrapper place-card__image-wrapper`}
          onClick={onClick}
        >
          <img
            className="place-card__image"
            src={preview.src}
            width="260"
            height="200"
            alt={preview.alt}
          />
        </div>
      )}
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {extraSlotContent}
        </div>
        <Rating className="place-card" rating={rating} />
        <h2 className="place-card__name" onClick={onClick}>
          {title}
        </h2>
        <p className="place-card__type">{footnote}</p>
      </div>
    </article>
  );
};
