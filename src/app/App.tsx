import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { cards } from '../mock/mock';
import { Favourites } from '../pages/Favourites';
import { Login } from '../pages/Login';
import { Main } from '../pages/Main';
import { Offer } from '../pages/Offer';
import { Layout } from './Layout';
import { ProtectedRoute } from '../components/protected-route';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main cards={cards} />} />
        <Route path="offer/:id" element={<Offer />} />
      </Route>
      <Route
        path="/favourites"
        element={
          <ProtectedRoute user={{}}>
            <Favourites />
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
