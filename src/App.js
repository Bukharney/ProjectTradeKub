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
import axios from "axios";

function App() {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");
  const [isLoading, setLoading] = useState(true);

  const readCookie = async () => {
    let token = Cookies.get("token");
    if (token) {
      setToken(token);
      setAuth(true);
      await axios
        .get("https://www.tradekub.me/users/1", {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
          Cookies.remove("token");
          setAuth(false);
        });
      console.log("readCookie");
      console.log(token);
    }
  };

  useEffect(() => {
    readCookie();
    setLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <TokenContext.Provider value={{ token, setToken }}>
          <Router>
            <Navbar />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                {!auth ? (
                  <Route path="/Login" element={<Login />} />
                ) : (
                  () => window.location.replace("/Market")
                )}
                <Route
                  path="/Market"
                  element={
                    <ProtectedRoute>
                      <Market />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/Wallet"
                  element={
                    <ProtectedRoute>
                      <Wallet />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/News"
                  element={
                    <ProtectedRoute>
                      <News />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/Notification"
                  element={
                    <ProtectedRoute>
                      <Notification />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/Profile"
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
    </>
  );
}

export default App;
