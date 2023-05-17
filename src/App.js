import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./component/Page/Navbar/Navbar";
import { Login } from "./component/Page/Login/Login";
import { Home } from "../frontend/src/component/Page/Homepage/Home";
import { Market } from "./component/Page/Market/Market";
import { Wallet } from "./component/Page/Wallet/Wallet";
import { News } from "./component/Page/News/News";
import { Notification } from "./component/Page/Notification/Notification";
import { Profile } from "./component/Page/Profile/Profile";
import AuthContext from "./Context/AuthContext";
import TokenContext from "./Context/TokenContext";
import Cookies from "js-cookie";
import "./App.css";

function App() {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");
  const readCookie = () => {
    let token = Cookies.get("token");
    if (token) {
      setAuth(true);
      setToken(token);
    }
  };
  React.useEffect(() => {
    readCookie();
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <TokenContext.Provider value={{ token, setToken }}>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/market" element={<Market />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/news" element={<News />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </Router>
      </TokenContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
