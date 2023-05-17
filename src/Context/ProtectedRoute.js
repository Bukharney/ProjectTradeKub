import { useContext } from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import AuthContext from "./AuthContext";

export const ProtectedRoute = ({ children }) => {
  const Auth = useContext(AuthContext);
  if (!Auth.auth) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};

export const ProtectedLayout = () => {
  const Auth = useContext(AuthContext);

  if (!Auth.auth) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <nav>
        <Link to="/wallet">Wallet</Link>
        <Link to="/news">News</Link>
        <Link to="/notification">Notification</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
};
