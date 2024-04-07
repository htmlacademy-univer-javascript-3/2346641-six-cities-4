import type { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useTypedSelector } from 'shared/hooks';

type ProtectedRouteProps = {
  children?: ReactNode;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const user = useTypedSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
