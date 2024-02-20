import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Favourites } from '../pages/Favourites';
import { Login } from '../pages/Login';
import { Main } from '../pages/Main';
import { Offer } from '../pages/Offer';
import { Layout } from './Layout';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { offers } from '../mocks/offers';
import { ScrollToTop } from '../components';

export const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main offers={offers} />} />
        <Route path="offer/:id" element={<Offer />} />
      </Route>
      <Route
        path="/favourites"
        element={
          <ProtectedRoute user={{}}>
            <Favourites
              items={{ Amsterdam: offers.slice(0, 2), Cologne: [offers[2]] }}
            />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        element={<h1>Ошибка 404. Запрашиваемой страницы не существует.</h1>}
      />
    </Routes>
  </BrowserRouter>
);
