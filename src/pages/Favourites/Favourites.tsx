import type { FC } from 'react';
import { Link } from 'react-router-dom';

import type { OfferListItem, SixCities } from 'entities';
import { AddToFavouritesButton } from 'features';
import { useGetFavouritesQuery } from 'features/add-to-favourites';
import { capitalize } from 'shared/lib';
import { Rating, Spinner } from 'shared/ui';
import { EmptyFavourites, FavouritesFooter, Header } from 'widgets';

export const Favourites: FC = () => {
  const { data, isLoading, error } = useGetFavouritesQuery();

  if (isLoading || error || !data) {
    return (
      <div className="page page--favorites-empty">
        <Header />
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container full-height">
            {isLoading ? (
              <Spinner />
            ) : (
              <section className="favorites favorites--empty">
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Unauthorized.</b>
                  <p className="favorites__status-description">
                    Please, sign in for us to know your favourite offers.
                  </p>
                </div>
              </section>
            )}
          </div>
          <FavouritesFooter />
        </main>
      </div>
    );
  }

  const items: Record<string, OfferListItem[]> = {};

  data.forEach((offer) => {
    const city = offer.city?.name as SixCities;

    if (city in items) {
      items[city].push(offer);
    } else {
      items[city] = [offer];
    }
  });

  if (data.length === 0) {
    return <EmptyFavourites />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
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
                            <AddToFavouritesButton
                              className="place-card"
                              offer={offer}
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
        </div>
        <FavouritesFooter />
      </main>
    </div>
  );
};
