import { FC } from 'react';

import { type Offer, OfferCard } from '../../entities';

type NearPlacesProps = {
  nearPlaces: Offer[];
};

export const NearPlaces: FC<NearPlacesProps> = ({ nearPlaces }) => {
  return (
    <div className="container">
      {nearPlaces.length > 0 && (
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            {nearPlaces.map((nearPlace) => (
              <OfferCard
                className="near-places"
                offer={nearPlace}
                key={nearPlace.id}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
