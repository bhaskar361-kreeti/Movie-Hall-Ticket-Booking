import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const actualUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const isLoggedIn = !!actualUser;
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
