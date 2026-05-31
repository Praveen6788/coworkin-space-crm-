// src/components/ProtectedRoute.jsx

import { Navigate } from "react-router-dom";

function ProtectedRoute({
  children,
}) {

  const clientId =
    localStorage.getItem(
      "clientId"
    );

  if (!clientId) {

    return (
      <Navigate
        to="/client-login"
        replace
      />
    );

  }

  return children;
}

export default ProtectedRoute;