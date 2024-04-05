import type { Person } from 'entities';

export type Review = {
  id: string;
  author: Person;
  rating: number;
  date: Date;
  text: string;
};
