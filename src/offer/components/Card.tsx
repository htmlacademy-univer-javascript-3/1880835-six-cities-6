import { MouseEvent, useMemo } from 'react';
import { capitalize } from '../../utils/string';
import { Offer, Rating } from '../types';
import { classNames } from '../../utils/classNames';

function CardRating({ rating }: { rating: Rating }) {
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{ width: `${rating * 20}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

type CardVariant = 'cities' | 'favorites';
function cardVariant(variant: CardVariant) {
  switch (variant) {
    case 'cities':
      return {
        article: 'cities__card',
        imageWrapper: 'cities__image-wrapper',
        cardInfo: '',
        image: {
          width: 260,
          height: 200,
        },
      };
    case 'favorites':
      return {
        article: 'favorites__card',
        imageWrapper: 'favorites__image-wrapper',
        cardInfo: 'favorites__card-info',
        image: {
          width: 150,
          height: 110,
        },
      };
    default:
      throw new Error(`Неизвестный тип карточки: ${variant as string}`);
  }
}

interface CardProps {
  offer: Offer;
  variant?: CardVariant;
  onMouseEnter?: (event: MouseEvent<HTMLElement>) => void;
}
export function Card({
  offer: { bookmark, premium, imageSRC, price, rating, name, type },
  variant,
  onMouseEnter,
}: CardProps) {
  const variantInfo = useMemo(
    () => cardVariant(variant ?? 'cities'),
    [variant]
  );

  return (
    <article
      className={classNames('place-card', variantInfo.article)}
      onMouseEnter={onMouseEnter}
    >
      {premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={classNames(
          variantInfo.imageWrapper,
          'place-card__image-wrapper'
        )}
      >
        <a href="#">
          <img
            className="place-card__image"
            src={imageSRC}
            width={variantInfo.image.width}
            height={variantInfo.image.height}
            alt="Place image"
          />
        </a>
      </div>
      <div className={classNames(variantInfo.cardInfo, 'place-card__info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={[
              'place-card__bookmark-button button',
              bookmark ? 'place-card__bookmark-button--active' : null,
            ]
              .filter((e) => e !== null)
              .join(' ')}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {bookmark ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <CardRating rating={rating} />
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}
