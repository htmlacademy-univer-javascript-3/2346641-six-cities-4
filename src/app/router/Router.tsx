import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { offers } from '../../shared/mocks';

import { FavouritesPage, MainPage, NotFoundPage, OfferPage } from '../../pages';

import { Layout } from './Layout';
import { ProtectedRoute } from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage offers={offers} />,
      },
      {
        path: 'offer/:id',
        element: <OfferPage />,
      },
      {
        path: 'favourites',
        element: (
          <ProtectedRoute user={{}}>
            <FavouritesPage
              items={{
                Amsterdam: offers.slice(0, 2),
                Cologne: [offers[2]],
              }}
            />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
