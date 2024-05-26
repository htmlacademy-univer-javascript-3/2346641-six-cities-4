import { TypedUseSelectorHook, useSelector } from 'react-redux';

import type { TRootState } from 'app';

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
