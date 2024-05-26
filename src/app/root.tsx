import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { Router } from './router';
import { store } from './store/store';

import { fetchOffers } from 'entities/offer';
import { useLazyGetUserInfoQuery } from 'features/auth';
import { TokenService } from 'shared/services';

export const App = () => {
  const [login] = useLazyGetUserInfoQuery();

  useEffect(() => {
    const token = TokenService.get();

    if (token) {
      // Try to login immediately if found token in localStorage,
      // in this case fetched offers are different
      login()
        .unwrap()
        .finally(() => {
          store.dispatch(fetchOffers());
        });
    } else {
      store.dispatch(fetchOffers());
    }
  }, [login]);

  return <Router />;
};

export const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
