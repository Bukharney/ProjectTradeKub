import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";

export const ProtectedRoute = ({ children }) => {
  const Auth = useContext(AuthContext);
  if (!Auth.auth) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
