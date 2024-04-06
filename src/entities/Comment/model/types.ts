import type { Person } from 'entities';

export type Comment = CommentPayload & {
  id: string;
  date: Date;
  user: Person;
};

export type CommentPayload = {
  rating: number;
  comment: string;
};
