import type { Person } from '../..';

export type Review = {
  id: string;
  author: Person;
  rating: number;
  date: Date;
  text: string;
};
