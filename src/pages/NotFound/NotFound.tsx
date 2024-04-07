import { Link } from 'react-router-dom';
import { Page } from 'shared/ui';
import { FavouritesFooter, Header } from 'widgets';

export const NotFound = () => {
  return (
    <div className="page page--gray page--main">
      <Page name="index">
        <Header />
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <div className="notfound__status-wrapper">
              <b className="favorites__status">Error 404</b>
              <p className="favorites__status-description">
                We couldn't find the page you were looking for.
              </p>
              <Link
                className="locations__item-link tabs__item tabs__item--active"
                to="/"
                style={{ marginTop: 20 }}
              >
                Home
              </Link>
            </div>
          </section>
        </div>
      </Page>
      <FavouritesFooter />
    </div>
  );
};
