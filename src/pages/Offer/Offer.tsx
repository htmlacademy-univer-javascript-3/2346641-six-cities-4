import { useParams } from 'react-router-dom';

import { offers } from '../../shared/mocks';
import { Page } from '../../shared/ui';

import { type Offer as OfferType, OfferGallery } from '../../entities';

import {
  NearPlaces,
  OfferDetails,
  OfferHost,
  OfferMap,
  OfferReviews,
} from '../../widgets';

export const Offer = () => {
  const { id } = useParams();
  const offer = (offers as OfferType[])[Number(id) - 1];

  return (
    <Page name="offer">
      <section className="offer">
        <OfferGallery offer={offer} />
        <div className="offer__container container">
          <div className="offer__wrapper">
            <OfferDetails offer={offer} />
            <OfferHost host={offer.owner} descriptions={offer.description} />
            <OfferReviews offerId={offer.id} />
          </div>
        </div>
        <OfferMap />
      </section>
      <NearPlaces initialPlaceId={offer.id} />
    </Page>
  );
};
