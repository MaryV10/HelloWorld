import { ROUTES } from '@/app/router/routes';
import { useAppSelector } from '@/shared/hooks/reduxHooks';
import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const { user } = useAppSelector((state) => state.user);



  if (!user) {
    return <Navigate to={ROUTES.HOME} />;
  }
  return children;
};

