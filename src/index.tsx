import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { type Place } from './types';

const cards: Place[] = [
  {
    name: 'Paris',
    type: 'apartment',
    preview: 'img/apartment-01.jpg',
    rating: 4,
    valuePerNight: 120,
    isPremium: true,
    isBookmarked: false,
  },
  {
    name: 'Wood and stone place',
    type: 'room',
    preview: 'img/room.jpg',
    rating: 4,
    valuePerNight: 80,
    isPremium: false,
    isBookmarked: true,
  },
  {
    name: 'Canal View Prinsengracht',
    type: 'apartment',
    preview: 'img/apartment-02.jpg',
    rating: 4,
    valuePerNight: 132,
    isPremium: false,
    isBookmarked: false,
  },
  {
    name: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    preview: 'img/apartment-03.jpg',
    rating: 5,
    valuePerNight: 180,
    isPremium: true,
    isBookmarked: false,
  },
  {
    name: 'Wood and stone place',
    type: 'room',
    preview: 'img/room.jpg',
    rating: 4,
    valuePerNight: 80,
    isPremium: false,
    isBookmarked: true,
  },
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cards={cards} />
  </React.StrictMode>
);
