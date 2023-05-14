import React, { useState } from "react";
import "./Home.css";
import Logo from "./Logo.svg";
import Banner from "./Banner.svg";
import Button from "./Button.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="Homepage">
      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>
      <header className="Homepage-header">
        <p>
          Better way <br /> to invest
        </p>
        <a>
          Tradekub simplifies securities trading by acting as an online
          intermediary for
          <br />
          brokers and investors. It aims to increase convenience for users
          placing stock orders, <br />
          making transactions seamless and hassle-free.
        </a>
      </header>
      <div className="Banner">
        <img src={Banner} alt="Banner" />
      </div>
      <div className="Button">
        <Link to="/Login">
          <button onClick={handleClick}>Go to Market</button>
          <img src={Button} alt="Button" />
        </Link>
      </div>
    </div>
  );
};
