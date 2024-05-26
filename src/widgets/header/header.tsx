import { memo } from 'react';

import { NavLoggedIn } from 'features/auth/ui/nav-logged-in';
import { NavLoggedOff } from 'features/auth/ui/nav-logged-off';
import { useTypedSelector } from 'shared/hooks';
import { Logo } from 'shared/ui';

export const Header = memo(function Header() {
  const user = useTypedSelector((state) => state.auth.user);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          {user ? <NavLoggedIn user={user} /> : <NavLoggedOff />}
        </div>
      </div>
    </header>
  );
});
