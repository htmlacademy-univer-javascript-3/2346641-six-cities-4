import { FC } from 'react';

import { Person } from '../../entities';

type OfferHostProps = {
  host: Person;
  descriptions?: string[];
};

export const OfferHost: FC<OfferHostProps> = ({ host, descriptions }) => {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div
          className={`offer__avatar-wrapper ${
            host.isPro ? 'offer__avatar-wrapper--pro' : ''
          } user__avatar-wrapper`}
        >
          <img
            className="offer__avatar user__avatar"
            src={host.avatar}
            width="74"
            height="74"
            alt="Host avatar"
          />
        </div>
        <span className="offer__user-name">{host.name}</span>
        {host.isPro && <span className="offer__user-status">Pro</span>}
      </div>
      {descriptions && (
        <div className="offer__description">
          {descriptions.map((desc, index) => (
            <p className="offer__text" key={index}>
              {desc}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
