import React, { useState } from "react";
import "./Home.css";
import Logo from "./Logo.svg";
import Banner from "./Banner.svg";
import Button from "./Button.svg";
import { Link } from "react-router-dom";
import Bigboss from "./Bigboss.svg";
import Film from "./Film.svg";
import Bigz from "./BigZ.svg";
import Ock from "./Ock.svg";

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

      <div className="Stock__detail">
        <div className="Stock__detail__box">
          <div className="Popular">
            <p>Popular</p>
            <div className="P1"></div>
            <div className="P2"></div>
          </div>
          <div className="Up">
            <p>Top Movers Up</p>
            <div className="U1"></div>
            <div className="U2"></div>
          </div>
          <div className="Down">
            <p>Top Movers Down</p>
            <div className="D1"></div>
            <div className="D2"></div>
          </div>
        </div>
      </div>

      <div className="Header__News">
        <p>News</p>
        <div className="News__box">
          <div className="News__box__1"></div>
        </div>
      </div>

      <div className="Header__Member">
        <p>About us</p>
        <div className="Member__box">
          <div className="Member__1">
            <div>
              <div className="Head__Name">
                <img src={Bigboss} alt="Pic" className="Pic" />
                <p className="Name">Mr.Jirapat lakme</p>
                <p className="Position">Full stack developer</p>
              </div>
              <p className="Detail__Name">
                jirapat.lakm@kmutt.ac.th <br />
                Student ID : 64070501010 <br />
                Bangkok, Thailand
              </p>
            </div>
          </div>

          <div className="Member__2">
            <div>
              <div className="Head__Name">
                <img src={Film} alt="Pic" className="Pic" />
                <p className="Name">Mr.Peerapat Padtawaro</p>
                <p className="Position">Full stack developer</p>
              </div>
              <p className="Detail__Name">
                Peerapad.padt@kmutt.ac.th <br />
                Student ID : 64070501039 <br />
                Bangkok, Thailand
              </p>
            </div>
          </div>

          <div className="Member__2And4">
            <div className="Member__3">
              <div>
                <div className="Head__Name">
                  <img src={Bigz} alt="Pic" className="Pic" />
                  <p className="Name">Mr.Pongsakorn Jansanit</p>
                  <p className="Position">Full stack developer</p>
                </div>
                <p className="Detail__Name">
                  pongsakorn.jans@kmutt.ac.th <br />
                  Student ID : 64070501033 <br />
                  Bangkok, Thailand
                </p>
              </div>
            </div>

            <div className="Member__4">
              <div>
                <div className="Head__Name">
                  <img src={Ock} alt="Pic" className="Pic" />
                  <p className="Name">Mr.Nutchapong Pramualsap</p>
                  <p className="Position">Full stack developer</p>
                </div>
                <p className="Detail__Name">
                  Nutchapong.pramualsap@kmutt.ac.th <br />
                  Student ID : 64070501092 <br />
                  Bangkok, Thailand
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
