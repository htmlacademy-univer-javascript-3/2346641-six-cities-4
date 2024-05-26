import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from 'react-router-dom';

import { ProtectedRoute } from './protected-route';

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
    element: (
      <>
        <Outlet />
        <ScrollRestoration />
      </>
    ),
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
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
