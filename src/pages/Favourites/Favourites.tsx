import type { FC } from 'react';
import { Link } from 'react-router-dom';

import type { OfferListItem, SixCities } from 'entities';
import { useGetFavouriteOffersQuery } from 'entities/Offer';
import { AddToBookmarksButton } from 'features';
import { capitalize } from 'shared/lib';
import { Page, Rating, Spinner } from 'shared/ui';
import { FavouritesFooter, FavouritesPlaceholder } from 'widgets';

export const Favourites: FC = () => {
  const { data, isLoading, error } = useGetFavouriteOffersQuery();

  if (error) {
    return (
      <Page name="favorites">
        <div className="page__favorites-container container">
          <h1>Вы не авторизованы для просмотра этой страницы.</h1>
          <h2>Пожалуйста, войдите в аккаунт.</h2>
        </div>
        <FavouritesFooter />
      </Page>
    );
  }
  if (isLoading || !data) {
    return (
      <Page name="favorites">
        <div className="page__favorites-container container">
          <Spinner />
        </div>
        <FavouritesFooter />
      </Page>
    );
  }

  const items: Record<string, OfferListItem[]> = {};

  data.forEach((offer) => {
    const city = offer.city?.name as SixCities;
    delete offer.city;

    if (city in items) {
      items[city].push(offer);
    } else {
      items[city] = [offer];
    }
  });

  return (
    <Page name="favorites">
      <div className="page__favorites-container container">
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
                      <article
                        className="favorites__card place-card"
                        key={index}
                      >
                        {offer.isPremium && (
                          <div className="place-card__mark">
                            <span>Premium</span>
                          </div>
                        )}
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <a href="#">
                            <img
                              className="place-card__image"
                              src={offer.previewImage}
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
                                &euro;{offer.price}
                              </b>
                              <span className="place-card__price-text">
                                &#47;&nbsp;night
                              </span>
                            </div>
                            <AddToBookmarksButton
                              className="place-card"
                              checked={offer.isFavourite}
                              onClick={() => {}}
                            />
                          </div>
                          <Rating
                            className="place-card"
                            rating={offer.rating}
                          />
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
};
