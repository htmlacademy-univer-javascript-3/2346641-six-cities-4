import { useCallback, useState, type FC } from 'react';

import { SortOffersForm } from 'features';
import { useTypedSelector } from 'shared/hooks';
import type { Point } from 'shared/types';
import { Spinner } from 'shared/ui';
import { CityMap, CityTabs, EmptyMain, Header, OfferList } from 'widgets';

export const Main: FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>();
  const currentCity = useTypedSelector((state) => state.city);
  const offersState = useTypedSelector((state) => state.offers);
  const offers = offersState.offers[currentCity.name];
  const isLoading = offersState.status === 'loading';

  const handleListItemHover = useCallback(
    (listItemId: string) => {
      if (offers) {
        const targetOffer = offers.find((offer) => offer.id === listItemId)!;
        setSelectedPoint({
          id: targetOffer.id,
          latitude: targetOffer.location.latitude,
          longitude: targetOffer.location.longitude,
        });
      }
    },
    [offers]
  );

  const handleListItemMouseLeave = useCallback(
    () => setSelectedPoint(undefined),
    []
  );

  if (isLoading) {
    return (
      <div className="page page--gray page--main">
        <main className="index">
          <CityTabs />
          <div className="cities">
            <Spinner />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      {offers.length > 0 ? (
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CityTabs />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offers.length} places to stay in {currentCity.name}
                </b>
                <SortOffersForm />
                <OfferList
                  offers={offers}
                  onListItemMouseEnter={handleListItemHover}
                  onListItemMouseLeave={handleListItemMouseLeave}
                />
              </section>
              <div className="cities__right-section">
                {offers && (
                  <CityMap
                    city={currentCity}
                    offers={offers}
                    selectedPoint={selectedPoint}
                  />
                )}
              </div>
            </div>
          </div>
        </main>
      ) : (
        <EmptyMain />
      )}
    </div>
  );
};
