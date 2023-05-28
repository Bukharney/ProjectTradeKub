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
import AccountContext from "./Context/AccountContext";
import { ProtectedRoute } from "./Context/ProtectedRoute";
import Cookies from "js-cookie";
import "./App.css";
import Register from "./component/Page/Register/Register";
import { GovernmentView } from "./component/Page/GovernmentView/GovernmentView";

import { AnalyticPage } from "./component/Page/AnalyticPage/AnalyticPage";
import { AccountManagement } from "./component/Page/AccountManagement/AccountManagement";
import { NewsManagement } from "./component/Page/NewsManagement/NewsManagement";
import { BankTransactionManagement } from "./component/Page/BankTransactionManagement/BankTransactionManagement";
import { SelectAccount } from "./component/Page/SelectAccount/SelectAccount";
import { StockTransactionManagement } from "./component/Page/StockTransactionManagement/StockTransactionManagement";
import { DividentManagement } from "./component/Page/DividentManagement/DividentManagement";

import axios from "axios";

function App() {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");
  const [account, setAccount] = useState("");
  const [isLoading, setLoading] = useState(true);

  const readCookie = async () => {
    let token = Cookies.get("token");
    let account = Cookies.get("account");
    if (token) {
      setAccount(account);
      setToken(token);
      setAuth(true);
      await axios
        .get("https://www.tradekub.me/users/token", {
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
    <AuthContext.Provider value={{ auth, setAuth }}>
      <TokenContext.Provider value={{ token, setToken }}>
        <AccountContext.Provider value={{ account, setAccount }}>
          <Router>
            <Navbar />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                {!auth ? (
                  <>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                  </>
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
                <Route path="/GovernmentView" element={<GovernmentView />} />
                <Route
                  path="/AnalyticPage"
                  element={
                    <ProtectedRoute>
                      <AnalyticPage />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/AccountManagement"
                  element={
                    <ProtectedRoute>
                      <AccountManagement />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/NewsManagement"
                  element={
                    <ProtectedRoute>
                      <NewsManagement />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/BankTransactionManagement"
                  element={
                    <ProtectedRoute>
                      <BankTransactionManagement />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/DividentManagement"
                  element={
                    <ProtectedRoute>
                      <DividentManagement />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/StockTransactionManagement"
                  element={
                    <ProtectedRoute>
                      <StockTransactionManagement />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/SelectAccount"
                  element={
                    <ProtectedRoute>
                      <SelectAccount />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/Register"
                  element={
                    <ProtectedRoute>
                      <Register />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </Router>
        </AccountContext.Provider>
      </TokenContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
