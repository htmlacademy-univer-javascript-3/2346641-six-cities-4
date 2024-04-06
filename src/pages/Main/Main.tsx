import { useState, type FC } from 'react';

import type { Point } from 'entities';
import { SortOffersForm } from 'features';
import { useTypedSelector } from 'shared/hooks';
import { Page, Spinner } from 'shared/ui';
import { CityMap, CityTabs, OfferList } from 'widgets';

export const Main: FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>();
  const currentCity = useTypedSelector((state) => state.city);
  const offersState = useTypedSelector((state) => state.offers);
  const offers = offersState.offers[currentCity.name];
  const isLoading = offersState.status === 'loading';

  const handleListItemHover = (listItemId: string) => {
    if (offers) {
      const targetOffer = offers.find((offer) => offer.id === listItemId)!;
      setSelectedPoint({
        id: targetOffer.id,
        latitude: targetOffer.location.latitude,
        longitude: targetOffer.location.longitude,
      });
    }
  };

  const handleListItemMouseLeave = () => setSelectedPoint(undefined);

  return (
    <div className="page page--gray page--main">
      <Page name="index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs />
        <div className="cities">
          {isLoading ? (
            <Spinner />
          ) : (
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
          )}
        </div>
      </Page>
    </div>
  );
};
