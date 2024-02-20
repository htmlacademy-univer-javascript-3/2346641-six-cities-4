import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  user: unknown;
  children?: ReactNode;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
