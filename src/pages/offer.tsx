import type { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { OfferGallery } from 'entities';
import { useGetNearbyOffersQuery, useGetOfferByIdQuery } from 'entities/offer';
import type { ServerError } from 'shared/types';
import { Spinner } from 'shared/ui';
import {
  Header,
  NearPlaces,
  OfferDetails,
  OfferHost,
  OfferMap,
  OfferReviews,
} from 'widgets';
import { PAGINATION } from 'shared/const';

export const Offer: FC = () => {
  const { id } = useParams();
  const { data: offer, isLoading, error } = useGetOfferByIdQuery({ id: id! });
  const { data: nearby } = useGetNearbyOffersQuery({
    id: id!,
  });

  if (error && (error as ServerError).status === 404) {
    return <Navigate to="/404" />;
  }

  if (isLoading || !offer) {
    return (
      <div className="page">
        <Header />
        <main className="page__main page__main--offer full-height">
          <Spinner />
        </main>
      </div>
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <>
          <section className="offer">
            <OfferGallery offer={offer} />
            <div className="offer__container container">
              <div className="offer__wrapper">
                <OfferDetails offer={offer} />
                <OfferHost host={offer.host} description={offer.description} />
                <OfferReviews offerId={offer.id} />
              </div>
            </div>
            {nearby && (
              <OfferMap
                offer={offer}
                nearPlaces={nearby.slice(0, PAGINATION.MAX_NEAR_PLACES)}
              />
            )}
          </section>
          {nearby && (
            <NearPlaces
              nearPlaces={nearby.slice(0, PAGINATION.MAX_NEAR_PLACES)}
            />
          )}
        </>
      </main>
    </div>
  );
};

Offer.displayName = 'OfferPage';
