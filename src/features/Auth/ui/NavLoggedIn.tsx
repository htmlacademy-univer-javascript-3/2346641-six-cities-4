import type { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { useLogoutMutation } from '../api/auth-api';
import type { User } from '../model/types';

export const NavLoggedIn: FC<{ user: User }> = ({ user }) => {
  const [logout] = useLogoutMutation();

  const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    logout();
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to="/favourites"
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">{user.email}</span>
            <span className="header__favorite-count">3</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#" onClick={handleLogout}>
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

NavLoggedIn.displayName = 'NavLoggedIn';
