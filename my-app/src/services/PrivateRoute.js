import React from 'react';
import { Route, useLocation,Navigate } from 'react-router-dom';
import AuthService from "./auth.service";
export const PrivateRoute = (props) => {
  const location = useLocation();

  if (AuthService.getCurrentUser()) {
    return props.children
  }

  return (
    <Navigate to={{ pathname: '/admin/login', state: { from: location } }} />
  );

};