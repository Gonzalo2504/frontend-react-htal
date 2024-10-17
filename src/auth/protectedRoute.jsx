import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, rolId: requiredRolId }) => {
  const token = localStorage.getItem('token');
  const location = useLocation();
  const userRolId = 1; // Assuming a default value for user's role ID

  if (!token || userRolId !== requiredRolId) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
