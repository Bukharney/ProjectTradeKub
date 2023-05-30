import React, { useState, useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { Notification } from "../Notification/Notification.js";

import "boxicons/css/boxicons.min.css";
import Logo from "./Logo.svg";
import Task from "./Task.svg";
import axios from "axios";
import TokenContext from "../../../Context/TokenContext";
import AccountContext from "../../../Context/AccountContext";

const storedValue = localStorage.getItem("key");
const defaultValue = { key: 0 };
export const value = storedValue ? JSON.parse(storedValue) : defaultValue;
export const hasRefresh = { rkey: 1 };
export const Navbar = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();
  const [data, setData] = useState([]);
  const Token = useContext(TokenContext);
  const Account = useContext(AccountContext);


  const handleClick = (index) => {
    value["key"] = index;
    setClick(!click);
    localStorage.setItem("key", JSON.stringify(value));
    if (index == 3 && hasRefresh["rkey"] == 1) {
      hasRefresh["rkey"] = 0;
    } else if (index == 3 && hasRefresh["rkey"] == 0) {
      hasRefresh["rkey"] = 1;
    } else {
      hasRefresh["rkey"] = 1;
    }
  };

  if (value["key"] === 3 && hasRefresh["rkey"] === 1) {
    if (window.location.pathname.includes("/Market")) {
      value["key"] = 0;
      localStorage.setItem("key", JSON.stringify(value));
    } else if (window.location.pathname.includes("/Wallet")) {
      value["key"] = 1;
      localStorage.setItem("key", JSON.stringify(value));
    } else if (window.location.pathname.includes("/News")) {
      value["key"] = 2;
      localStorage.setItem("key", JSON.stringify(value));
    } else if (window.location.pathname.includes("/Profile")) {
      value["key"] = 4;
      localStorage.setItem("key", JSON.stringify(value));
    }
  }

  const get_noti = async (e) => {
    await axios
      .get(`https://www.tradekub.me/noti/${e}`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error.response);
        setData([]);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call your API functions here
        get_noti(Account.account);
        // ... other API calls

      } catch (error) {
        console.error(error);
      }
    };

    // Fetch data immediately
    fetchData();

    // Fetch data every 10 seconds
    const interval = setInterval(fetchData, 10000);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);


  if (
    location.pathname === "/" ||
    location.pathname.toLowerCase() === "/login" ||
    location.pathname.toLowerCase() === "/login/" ||
    location.pathname.toLowerCase() === "/register" ||
    location.pathname.toLowerCase() === "/register/" ||
    location.pathname.toLowerCase() === "/view" ||
    location.pathname.toLowerCase() === "/view/" ||
    location.pathname.toLowerCase() === "/analyticpage" ||
    location.pathname.toLowerCase() === "/analyticpage/" ||
    location.pathname.toLowerCase() === "/accountmanagement" ||
    location.pathname.toLowerCase() === "/accountmanagement/" ||
    location.pathname.toLowerCase() === "/dividentmanagement" ||
    location.pathname.toLowerCase() === "/dividentmanagement/" ||
    location.pathname.toLowerCase() === "/portfoliomanagement" ||
    location.pathname.toLowerCase() === "/portfoliomanagement/" ||
    location.pathname.toLowerCase() === "/newsmanagement" ||
    location.pathname.toLowerCase() === "/newsmanagement/" ||
    location.pathname.toLowerCase() === "/banktransactionmanagement" ||
    location.pathname.toLowerCase() === "/banktransactionmanagement/" ||
    location.pathname.toLowerCase() === "/selectaccount" ||
    location.pathname.toLowerCase() === "/selectaccount/" ||
    location.pathname.toLowerCase() === "/edituser"||
    location.pathname.toLowerCase() === "/edituser/" 
  )
  {
    value["key"] = 0;
    localStorage.setItem("key", JSON.stringify(value));
    if (location.pathname.toLowerCase() !== "/view" && location.pathname.toLowerCase() !== "/view/") {
      localStorage.setItem("roleI", JSON.stringify(0));
      localStorage.setItem("Label", JSON.stringify(""));
    }
    return null;
  }

  else return (
    <nav className="navbar">
      <div className="nav-container">
        <Notification value={value} hasRefresh={hasRefresh} />
        <ul className={click ? " " : " "}>
          <li className="nav-logo">
            <NavLink exact to="/" onClick={() => handleClick(0)}>
              <img src={Logo} alt="Logo" />
            </NavLink>
          </li>

          <li className={value["key"] === 0 ? "nav-itemClicked" : "nav-item"}>
            <NavLink exact to="/Market" onClick={() => handleClick(0)}>
              <i className="bx bxs-dashboard"></i>
              {value["key"] === 0 && (
                <img src={Task} alt="Task" className="Task" />
              )}
            </NavLink>
          </li>
          <li className={value["key"] === 1 ? "nav-itemClicked" : "nav-item"}>
            <NavLink exact to="/Wallet" onClick={() => handleClick(1)}>
              <i className="bx bx-wallet"></i>
              {value["key"] === 1 && (
                <img src={Task} alt="Task" className="Task" />
              )}
            </NavLink>
          </li>
          <li className={value["key"] === 2 ? "nav-itemClicked" : "nav-item"}>
            <NavLink exact to="/News" onClick={() => handleClick(2)}>
              <i className="bx bx-news"></i>
              {value["key"] === 2 && (
                <img src={Task} alt="Task" className="Task" />
              )}
            </NavLink>
          </li>
          <li className={value["key"] === 3 ? "nav-itemClicked" : "nav-item"}>
            <NavLink exact onClick={() => handleClick(3)}>
              <i className="bx bx-notification">
                {data.length > 0 && <div className="Nav__Noti__dot"></div>}
              </i>
              {value["key"] === 3 && (
                <img src={Task} alt="Task" className="Task" />
              )}
            </NavLink>
          </li>
          <li className={value["key"] === 4 ? "nav-itemClicked" : "nav-item"}>
            <NavLink exact to="/Profile" onClick={() => handleClick(4)}>
              <i className="bx bx-user"></i>
              {value["key"] === 4 && (
                <img src={Task} alt="Task" className="Task" />
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};