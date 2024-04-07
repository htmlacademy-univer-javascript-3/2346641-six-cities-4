import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { offersActions } from './model/slice';

export { fetchOffers } from './api/fetchOffers';
export * from './api/offer-api';
export * from './model/slice';
export * from './model/types';

export const useOffersActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(offersActions, dispatch);
};
