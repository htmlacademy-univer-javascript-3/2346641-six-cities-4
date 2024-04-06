import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { Router } from './router';
import { store } from './store/store';

import { fetchOffers } from 'entities/Offer';

export const App = () => {
  useEffect(() => {
    store.dispatch(fetchOffers());
  }, []);

  return <Router />;
};

export const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
