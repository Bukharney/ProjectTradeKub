import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./component/Page/Navbar/Navbar";
import { Login } from "./component/Page/Login/Login";
import { Home } from "./component/Page/Homepage/Home";
import { Market } from "./component/Page/Market/Market";
import { Wallet } from "./component/Page/Wallet/Wallet";
import { News } from "./component/Page/News/News";
import { Notification } from "./component/Page/Notification/Notification";
import { Profile } from "./component/Page/Profile/Profile";
import AuthContext from "./Context/AuthContext";
import TokenContext from "./Context/TokenContext";
import { ProtectedRoute } from "./Context/ProtectedRoute";
import Cookies from "js-cookie";
import "./App.css";

function App() {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const readCookie = async () => {
      setAuth(true);
      setToken(Cookies.get("token"));
    };

    readCookie();
    console.log("useEffect");
  }, []);

  return (
    <>
      {auth ? (
        <AuthContext.Provider value={{ auth, setAuth }}>
          <TokenContext.Provider value={{ token, setToken }}>
            <Router>
              <Navbar />
              <div>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/login"
                    element={
                      <ProtectedRoute>
                        <Login />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/market"
                    element={
                      <ProtectedRoute>
                        <Market />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/wallet"
                    element={
                      <ProtectedRoute>
                        <Wallet />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/news"
                    element={
                      <ProtectedRoute>
                        <News />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/notification"
                    element={
                      <ProtectedRoute>
                        <Notification />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </div>
            </Router>
          </TokenContext.Provider>
        </AuthContext.Provider>
      ) : (
        <>loading ...</>
      )}
    </>
  );
}

export default App;
