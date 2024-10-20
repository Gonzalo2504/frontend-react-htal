import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, rolId}) => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  // Decodificar el token para obtener el rol del usuario
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  const rol_id = decodedToken.rol_id;

  if (rol_id === rolId) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;

