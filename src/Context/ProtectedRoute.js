import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";

export const ProtectedRoute = ({ children }) => {
  const Auth = useContext(AuthContext);
  if (Auth.auth) {
    return children;
  } else return <Navigate to="/Login" />;
};
