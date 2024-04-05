import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Header } from 'widgets';

export const Layout = () => (
  <div className="page">
    <Header />
    <Outlet />
    <ScrollRestoration />
  </div>
);
