import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { Notification } from "../Notification/Notification.js";
import { NotificationInbox } from "../Notification/DBNotification.js";

import "boxicons/css/boxicons.min.css";
import Logo from "./Logo.svg";
import Task from "./Task.svg";

const storedValue = localStorage.getItem("key");
const defaultValue = { key: 0 };
export const value = storedValue ? JSON.parse(storedValue) : defaultValue;
export const hasRefresh = { rkey: 1 };
export const Navbar = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();

  const handleClick = (index) => {
    value["key"] = index;
    setClick(!click);
    localStorage.setItem("key", JSON.stringify(value));
    if (index == 3&&hasRefresh['rkey']==1) {
      hasRefresh["rkey"] = 0;
    }
    else if(index == 3&&hasRefresh['rkey']==0){
      hasRefresh["rkey"] = 1;
    }
    else {
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
    }else if (window.location.pathname.includes("/Profile")) {
      value["key"] = 4;
      localStorage.setItem("key", JSON.stringify(value));
    }
  }

  if (location.pathname === "/" || location.pathname === "/Login") {
    return null;
  }

  return (
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
              {NotificationInbox.result.length !== 0 && <div className="Nav__Noti__dot"></div>}
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
