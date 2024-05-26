import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { cityActions } from './model/store/slice';

export const useCityActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(cityActions, dispatch);
};

export { cityReducer } from './model/store/slice';
