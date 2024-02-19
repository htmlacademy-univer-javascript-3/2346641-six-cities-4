import { FC } from 'react';
import { Main } from '../pages/Main';
import type { Place } from '../types';

export const App: FC<{ cards?: Place[] }> = (props) => (
  <Main cards={props.cards} />
);
