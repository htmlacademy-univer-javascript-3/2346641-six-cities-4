import { Offer } from '../../entities';
import { people } from './people';
import { reviews } from './reviews';

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    previews: [
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
    ],
    rating: 4,
    valuePerNight: 120,
    isPremium: true,
    isBookmarked: false,
    maxGuests: 4,
    numberOfBedrooms: 3,
    owner: people[0],
    city: 'Amsterdam',
    insideItems: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee Machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    description: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    ],
    reviews: [reviews[0]],
    coords: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
    },
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'room',
    previews: ['img/room.jpg'],
    rating: 4,
    valuePerNight: 80,
    isPremium: false,
    isBookmarked: true,
    maxGuests: 4,
    numberOfBedrooms: 3,
    owner: people[0],
    city: 'Amsterdam',
    reviews: [reviews[0]],
    coords: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
    },
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    previews: ['img/apartment-02.jpg'],
    rating: 4,
    valuePerNight: 132,
    isPremium: false,
    isBookmarked: false,
    maxGuests: 4,
    numberOfBedrooms: 3,
    owner: people[0],
    city: 'Amsterdam',
    reviews: [reviews[0]],
    coords: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
    },
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    previews: ['img/apartment-03.jpg'],
    rating: 5,
    valuePerNight: 180,
    isPremium: true,
    isBookmarked: false,
    maxGuests: 4,
    numberOfBedrooms: 3,
    owner: people[0],
    city: 'Amsterdam',
    reviews: [reviews[0]],
    coords: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
    },
  },
  {
    id: '5',
    title: 'Wood and stone place',
    type: 'room',
    previews: ['img/room.jpg'],
    rating: 4,
    valuePerNight: 80,
    isPremium: false,
    isBookmarked: true,
    maxGuests: 4,
    numberOfBedrooms: 3,
    owner: people[0],
    city: 'Amsterdam',
    reviews: [reviews[0]],
    coords: {
      latitude: 52.3709553943508,
      longitude: 4.939309666406198,
    },
  },
];
