import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const FavouritesFooter: FC = () => {
  return (
    <footer className="footer container">
      <Link className="footer__logo-link" to="/">
        <img
          className="footer__logo"
          src="img/logo.svg"
          alt="6 cities logo"
          width="64"
          height="33"
        />
      </Link>
    </footer>
  );
};

FavouritesFooter.displayName = 'FavouritesFooter';
