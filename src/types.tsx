export type Place = {
  id: string;
  name: string;
  type: 'apartment' | 'room';
  preview: string;
  valuePerNight: number;
  rating: 1 | 2 | 3 | 4 | 5;
  isPremium?: boolean;
  isBookmarked?: boolean;
};
