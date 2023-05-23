import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { Notification } from "../Notification/Notification.js";
import "boxicons/css/boxicons.min.css";
import Logo from "./Logo.svg";
import Task from "./Task.svg";

export let value = { key: 0 };

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [showTask, setShowTask] = useState(null);
  const location = useLocation();

  const handleClick = (index) => {
    value["key"] = index;
    setClick(!click);
    setShowTask(index);
  };

  if (location.pathname === "/" || location.pathname === "/Login") {
    return null;
  }

  return (
    <nav className="navbar">
      <Notification A={value} />
      <div className="nav-container">
        <ul className={click ? " " : " "}>
          <li className="nav-logo">
            <NavLink exact to="/" onClick={() => handleClick(null)}>
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
                <div className="Nav__Noti__dot"></div>
              </i>
              {value["key"] === 3 && (
                <img src={Task} alt="Task" className="Task" />
              )}
            </NavLink>
          </li>
          <li className={value["key"] === 4 ? "nav-itemClicked" : "nav-item"}>
            <NavLink exact to="/Profile" onClick={() => handleClick(4)}>
              <i className="bx bx-user"></i>
              {showTask === 4 && <img src={Task} alt="Task" className="Task" />}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};