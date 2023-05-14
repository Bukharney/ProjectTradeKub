import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import "boxicons/css/boxicons.min.css";
import Logo from "./Logo.svg";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);

  if (location.pathname === "/" || location.pathname === "/Login") {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-logo">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <img src={Logo} alt="Logo" />
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              to="/Market"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <i className="bx bxs-dashboard"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/Wallet"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <i className="bx bx-wallet"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/News"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <i className="bx bx-news"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/Notification"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <i className="bx bx-notification"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/Profile"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <i className="bx bx-user"></i>
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}