import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";

export const ProtectedRoute = ({ children }) => {
  const Auth = useContext(AuthContext);
  if (Auth.auth) {
    return children;
  }
  return <Navigate to="/login" />;
};
