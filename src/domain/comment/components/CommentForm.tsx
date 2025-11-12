import { useState } from 'react';
import { Input as RatingInput } from '../../rating/components/Input';
import { Comment } from '../types';
import { createOnChangeHandler } from '../../../utils/react/form/createOnChangeHandler';

export function CommentForm({
  feedback = {
    rating: 0,
    text: '',
  },
}: {
  feedback?: Comment;
}) {
  const [feedbackState, setFeedbackState] = useState<Comment>(feedback);

  const onChange = createOnChangeHandler((builder) =>
    builder
      .addCase('review', (value) =>
        setFeedbackState({ ...feedbackState, text: value })
      )
      .addCase('rating', (value) =>
        setFeedbackState({
          ...feedbackState,
          rating: parseInt(value, 10),
        })
      )
  );

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
        value={feedbackState.text}
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
