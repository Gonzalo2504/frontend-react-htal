import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, RolId}) => {
  const token = localStorage.getItem('token');
  const location = useLocation();
  const decodedToken = JSON.parse(atob(access_token.split(".")[1]));
  const rol_id = decodedToken.rol_id;

  if (!token || rol_id !== RolId) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;

