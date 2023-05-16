import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./component/Page/Navbar/Navbar";
import { Login } from "./component/Page/Login/Login";
import { Home } from "./component/Page/Homepage/Home";
import { Market } from "./component/Page/Market/Market";
import { Wallet } from "./component/Page/Wallet/Wallet";
import { News } from "./component/Page/News/News";
import { Notification } from "./component/Page/Notification/Notification";
import { Profile } from "./component/Page/Profile/Profile";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Notification/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route path="/Market" element={<Market />} />
          <Route path="/Wallet" element={<Wallet />} />
          <Route path="/News" element={<News />} />
          <Route path="/Profile" element={<Profile />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
