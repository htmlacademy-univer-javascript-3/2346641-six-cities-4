import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Layout } from './Layout';
import { ProtectedRoute } from './ProtectedRoute';

import {
  FavouritesPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  OfferPage,
} from 'pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'offer/:id',
        element: <OfferPage />,
      },
      {
        path: 'favourites',
        element: (
          <ProtectedRoute>
            <FavouritesPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
