import Userfront from '@userfront/toolkit';
import React, { Children } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let Location = useLocation();
  if (!Userfront.tokens.accessToken) {
    return <Navigate to="/login" state={{ from: Location }} replace />;
  }
  return children;
};
