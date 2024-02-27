import { FC } from 'react';

import { OfferCard, type Offer } from '../../entities';

type OfferListProps = {
  offers?: Offer[];
};

export const OfferList: FC<OfferListProps> = ({ offers }) => {
  // const [activeOfferId, setActiveOfferId] = useState<string>();

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers &&
        offers.map((offer) => (
          <OfferCard className="cities" offer={offer} key={offer.id} />
        ))}
    </div>
  );
};
