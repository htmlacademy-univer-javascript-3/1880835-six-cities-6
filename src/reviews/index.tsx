import { ChangeEvent, useState } from 'react';
import { Input as RatingInput } from '../rating/components/Input';
import { Feedback, Review as ReviewData } from './types';
import classNames from 'classnames';

export function ReviewList({ reviews }: { reviews: ReviewData[] }) {
  return (
    <ul className="reviews__list">
      {reviews.map((r) => (
        <li key={r.id} className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img
                className="reviews__avatar user__avatar"
                src="img/avatar-max.jpg"
                width={54}
                height={54}
                alt="Reviews avatar"
              />
            </div>
            <span className="reviews__user-name">Max</span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{ width: '80%' }} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              A quiet cozy and picturesque that hides behind a a river by the
              unique lightness of Amsterdam. The building is green and from 18th
              century.
            </p>
            <time className="reviews__time" dateTime="2019-04-24">
              April 2019
            </time>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function FeedbackForm({
  feedback = {
    rating: 0,
    text: '',
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
        setFeedbackState({ ...feedbackState, text: target.value });
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

export function Review({
  className,
  reviews,
}: {
  className?: string;
  reviews: ReviewData[];
}) {
  return (
    <section className={classNames('reviews', className)}>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewList reviews={reviews} />
      <FeedbackForm />
    </section>
  );
}
