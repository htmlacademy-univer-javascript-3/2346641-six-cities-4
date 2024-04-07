import { useAddCommentMutation } from 'entities/Comment';
import {
  useState,
  type ChangeEvent,
  type FC,
  type MouseEventHandler,
} from 'react';

const initialState = {
  rating: 0,
  text: '',
};

type ReviewFormData = {
  rating: number;
  text: string;
};

type ReviewFormProps = {
  offerId: string;
  onSuccess?: VoidFunction;
  formKey: string;
};

export const ReviewForm: FC<ReviewFormProps> = ({
  offerId,
  onSuccess,
  formKey,
}) => {
  const [createReview] = useAddCommentMutation();
  const [formData, setFormData] = useState<ReviewFormData>(initialState);

  const onRatingInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, rating: +e.target.value });
  };

  const onTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, text: e.target.value });
  };

  const onSubmitButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    createReview({
      offerId: offerId,
      comment: {
        comment: formData.text,
        rating: formData.rating,
      },
    })
      .unwrap()
      .then(() => {
        onSuccess && onSuccess();
        setFormData(initialState);
      });
  };

  return (
    <form className="reviews__form form" action="#" method="post" key={formKey}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          onInput={onRatingInput}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          onInput={onRatingInput}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          onInput={onRatingInput}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          onInput={onRatingInput}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          onInput={onRatingInput}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onTextChange}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          onClick={onSubmitButtonClick}
          disabled={
            !formData.text || !formData.rating || formData.text.length < 50
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
};
