import { ChangeEvent, useState } from 'react';
import { Input as RatingInput } from '../../rating/components/Input';

export interface Feedback {
  rating: number;
  comment: string;
}

export function FeedbackForm({
  feedback = {
    rating: 0,
    comment: '',
  },
}: {
  feedback?: Feedback;
}) {
  const [feedbackState, setFeedbackState] = useState<Feedback>(feedback);

  const onChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (target.getAttribute('name')) {
      case 'review':
        setFeedbackState({ ...feedbackState, comment: target.value });
        break;
      case 'rating':
        setFeedbackState({
          ...feedbackState,
          rating: parseInt(target.value, 10),
        });
        break;
      default:
        throw new Error(
          `Не удалось обработать элемент с name: ${target.getAttribute(
            'name'
          )}`,
          { cause: target }
        );
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <RatingInput rating={feedbackState.rating} onChange={onChange} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={feedbackState.comment}
        onChange={onChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}
