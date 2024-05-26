import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { offerSortActions } from './model/store/slice';

export { offerSortActions, offerSortReducer } from './model/store/slice';
export { useOfferSort } from './use-offer-sort';

export const useOfferSortActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(offerSortActions, dispatch);
};
