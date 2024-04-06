import type { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Page, Spinner } from 'shared/ui';

import { OfferGallery } from 'entities';

import { useGetNearbyOffersQuery, useGetOfferByIdQuery } from 'entities/Offer';
import {
  NearPlaces,
  OfferDetails,
  OfferHost,
  OfferMap,
  OfferReviews,
} from 'widgets';

export const Offer: FC = () => {
  const { id } = useParams();
  const { data: offer, isLoading } = useGetOfferByIdQuery({ id: id! });
  const { data: nearby } = useGetNearbyOffersQuery({
    id: id!,
  });

  if (isLoading || !offer) {
    return (
      <Page name="offer">
        <Spinner />
      </Page>
    );
  }

  return (
    <Page name="offer">
      <>
        <section className="offer">
          <OfferGallery offer={offer} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferDetails offer={offer} />
              <OfferHost host={offer.host} descriptions={[offer.description]} />
              <OfferReviews offerId={offer.id} />
            </div>
          </div>
          {nearby && <OfferMap offer={offer} nearPlaces={nearby} />}
        </section>
        {nearby && <NearPlaces nearPlaces={nearby} />}
      </>
    </Page>
  );
};

Offer.displayName = 'OfferPage';
