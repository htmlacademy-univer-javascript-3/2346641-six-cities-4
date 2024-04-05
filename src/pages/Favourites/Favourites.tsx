import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { capitalize } from 'shared/lib';
import { Page } from 'shared/ui';

import type { Offer } from 'entities';

import { FavouritesFooter, FavouritesPlaceholder } from 'widgets';

type FavouritesProps = {
  items?: Record<string, Offer[]>;
};

export const Favourites: FC<FavouritesProps> = ({ items }) => (
  <Page name="favorites">
    <div className="page__favorites-container container">
      {/* TODO: empty obj */}
      {items ? (
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(items).map((item, index) => (
              <li className="favorites__locations-items" key={index}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{item[0]}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {item[1].map((offer, index) => (
                    <article className="favorites__card place-card" key={index}>
                      {offer.isPremium && (
                        <div className="place-card__mark">
                          <span>Premium</span>
                        </div>
                      )}
                      <div className="favorites__image-wrapper place-card__image-wrapper">
                        <a href="#">
                          <img
                            className="place-card__image"
                            src={offer.previews[0]}
                            width="150"
                            height="110"
                            alt="Place image"
                          />
                        </a>
                      </div>
                      <div className="favorites__card-info place-card__info">
                        <div className="place-card__price-wrapper">
                          <div className="place-card__price">
                            <b className="place-card__price-value">
                              &euro;{offer.valuePerNight}
                            </b>
                            <span className="place-card__price-text">
                              &#47;&nbsp;night
                            </span>
                          </div>
                          <button
                            className={`place-card__bookmark-button ${
                              offer.isBookmarked
                                ? 'place-card__bookmark-button--active'
                                : ''
                            } button`}
                            type="button"
                          >
                            <svg
                              className="place-card__bookmark-icon"
                              width="18"
                              height="19"
                            >
                              <use xlinkHref="#icon-bookmark"></use>
                            </svg>
                            <span className="visually-hidden">
                              {offer.isBookmarked
                                ? 'In bookmarks'
                                : 'To bookmarks'}
                            </span>
                          </button>
                        </div>
                        <div className="place-card__rating rating">
                          <div className="place-card__stars rating__stars">
                            <span
                              style={{ width: `${offer.rating * 20}%` }}
                            ></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <h2 className="place-card__name">
                          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
                        </h2>
                        <p className="place-card__type">
                          {capitalize(offer.type)}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <FavouritesPlaceholder />
      )}
    </div>
    <FavouritesFooter />
  </Page>
);
