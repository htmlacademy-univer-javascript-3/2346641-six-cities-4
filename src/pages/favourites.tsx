import type { FC } from 'react';

import { useGetFavouritesQuery } from 'features/add-to-favourites';
import { Spinner } from 'shared/ui';
import { EmptyFavourites, FavouritesFooter, Header } from 'widgets';
import { getSplitOffersByCity } from 'features/sort-offers/get-split-offers-by-city';
import { OfferItem } from 'entities/offer';
import { Navigate, useNavigate } from 'react-router-dom';
import { useCityActions } from 'entities/city';

const FavouritesLoading: FC = () => (
  <div className="page page--favorites-empty">
    <Header />
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container full-height">
        <Spinner />
      </div>
      <FavouritesFooter />
    </main>
  </div>
);

export const Favourites: FC = () => {
  const { data, isLoading, error, refetch } = useGetFavouritesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const { setCityByName } = useCityActions();
  const navigate = useNavigate();

  if (isLoading) {
    return <FavouritesLoading />;
  }

  if (error) {
    return <Navigate to="/login" />;
  }

  if (!data || data.length === 0) {
    return <EmptyFavourites />;
  }

  const items = getSplitOffersByCity(data);

  const handleCityClick = (city: string) => () => {
    setCityByName(city);
    navigate('/');
  };

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
                      <a
                        className="locations__item-link"
                        onClick={handleCityClick(item[0])}
                      >
                        <span>{item[0]}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {item[1].map((offer) => (
                      <OfferItem
                        offer={offer}
                        key={offer.id}
                        onFavouriteClick={() => refetch()}
                      />
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
