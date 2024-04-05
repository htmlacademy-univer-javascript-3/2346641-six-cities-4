import { useState, type FC } from 'react';

import type { Offer, Point } from 'entities';
import { useGetOffersQuery } from 'entities/Offer';
import { SortOffersForm } from 'features';
import { useTypedSelector } from 'shared/hooks';
import { Page } from 'shared/ui';
import { CityMap, CityTabs, OfferList } from 'widgets';

export interface MainPageProps {
  offers?: Offer[];
}

export const Main: FC<MainPageProps> = ({ offers }) => {
  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>();
  const { data } = useGetOffersQuery();
  const currentCity = useTypedSelector((state) => state.city);

  const handleListItemHover = (listItemId: string) => {
    if (offers) {
      const currentOffer = offers.find((offer) => offer.id === listItemId)!;

      setSelectedPoint({
        id: currentOffer.id,
        latitude: currentOffer.coords.latitude,
        longitude: currentOffer.coords.longitude,
      });
    }
  };

  const handleListItemMouseLeave = () => setSelectedPoint(undefined);

  return (
    <div className="page page--gray page--main">
      <Page name="index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs />
        {JSON.stringify(data)}
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers?.length} places to stay in {currentCity.title}
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
      </Page>
    </div>
  );
};
