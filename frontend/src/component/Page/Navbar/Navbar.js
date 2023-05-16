import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import{Notification} from '../Notification/Notification.js';
import "boxicons/css/boxicons.min.css";
import Logo from "./Logo.svg";
import Task from "./Task.svg";

 
export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [showTask, setShowTask] = useState(null); // new state for showing Task image
  const location = useLocation();

  const handleClick = (index) => { // modify handleClick to accept the index of the clicked item
    setClick(!click);
    setShowTask(index); // set the index of the clicked item as the value for showTask
  };

  if (location.pathname === "/" || location.pathname === "/Login") {
    return null;
  }

  return (
     <nav className="navbar">
      <Notification A = {showTask} />
      <div className="nav-container">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-logo">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={() => handleClick(null)} // modify to reset showTask to null
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
              onClick={() => handleClick(0)} // pass the index of the clicked item to handleClick
            >
              <i className="bx bxs-dashboard"></i>
              {showTask === 0 && <img src={Task} alt="Task" className="Task" />} {/* conditional rendering for Task image */}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/Wallet"
              activeClassName="active"
              className="nav-links"
              onClick={() => handleClick(1)}
            >
              <i className="bx bx-wallet"></i>
              {showTask === 1 && <img src={Task} alt="Task" className="Task" />}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/News"
              activeClassName="active"
              className="nav-links"
              onClick={() => handleClick(2)}
            >
              <i className="bx bx-news"></i>
              {showTask === 2 && <img src={Task} alt="Task" className="Task" />}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-links"
              onClick={() => handleClick(3)}
            >
               <i className="bx bx-notification"></i>
              {showTask === 3 && <img src={Task} alt="Task" className="Task" />}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/Profile"
              activeClassName="active"
              className="nav-links"
              onClick={() => handleClick(4)}
            >
              <i className="bx bx-user"></i>
              {showTask === 4 && <img src={Task} alt="Task" className="Task" />}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
 