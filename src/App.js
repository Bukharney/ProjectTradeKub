import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./component/Page/Navbar/Navbar";
import { Login } from "./component/Page/Login/Login";
import { Home } from "./component/Page/Homepage/Home";
import { Market } from "./component/Page/Market/Market";
import { Wallet } from "./component/Page/Wallet/Wallet";
import { News } from "./component/Page/News/News";
import { Notification } from "./component/Page/Notification/Notification.js";
import { Profile } from "./component/Page/Profile/Profile";
import AuthContext from "./Context/AuthContext";
import TokenContext from "./Context/TokenContext";
import { ProtectedRoute } from "./Context/ProtectedRoute";
import Cookies from "js-cookie";
import "./App.css";
import { GovernmentView } from "./component/Page/GovernmentView/GovernmentView";


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
                    path="/Login"
                    element={
                      <ProtectedRoute>
                        <Login />
                      </ProtectedRoute>
                    }
                  />
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
                    path="/Profile"
                    element={
                      <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/GovernmentView"
                    element={
                      <ProtectedRoute>
                        <GovernmentView />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    element={
                      <ProtectedRoute>
                        <GovernmentView />
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
