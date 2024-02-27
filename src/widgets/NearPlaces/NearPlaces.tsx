import { FC } from 'react';

import { offers } from '../../shared/mocks';

import { type Offer, OfferCard } from '../../entities';

type NearPlacesProps = {
  initialPlaceId: string;
};

export const NearPlaces: FC<NearPlacesProps> = () => {
  const data = offers.slice(1, 4) as Offer[];

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {data.map((offer) => (
            <OfferCard className="near-places" offer={offer} key={offer.id} />
          ))}
        </div>
      </section>
    </div>
  );
};
