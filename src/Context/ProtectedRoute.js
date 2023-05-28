import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import AccountContext from "./AccountContext";

export const ProtectedRoute = ({ children }) => {
  const Auth = useContext(AuthContext);
  const Account = useContext(AccountContext);
  if (Auth.auth) {
    return children;
  } else return <Navigate to="/Login" />;
};
