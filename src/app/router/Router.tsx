import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Layout } from './Layout';
import { ProtectedRoute } from './ProtectedRoute';

import { FavouritesPage, MainPage, NotFoundPage, OfferPage } from 'pages';

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
          <ProtectedRoute user={{}}>
            <FavouritesPage />
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
