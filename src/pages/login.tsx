import type { FC } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useTypedSelector } from 'shared/hooks';

import { Logo } from 'shared/ui';
import { LoginForm } from 'widgets';

export const Login: FC = () => {
  const token = useTypedSelector((state) => state.auth.token);

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Login.displayName = 'LoginPage';
