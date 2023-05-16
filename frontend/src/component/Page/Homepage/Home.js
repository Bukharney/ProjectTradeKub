import React, { useState } from "react";
import "./Home.css";
import Logo from "./Logo.svg";
import Banner from "./Banner.svg";
import { Link } from "react-router-dom";
import Bigboss from "./Bigboss.svg";
import Film from "./Film.svg";
import Bigz from "./BigZ.svg";
import Ock from "./Ock.svg";
import { News } from "./DBHome.js";
import Moon from "./Moon.svg";

export const Home = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="Homepage">
      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="Homepage-header">
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
          <div className="News__box__1">
            {News.map((newsItem) => (
              <div className="News__item">
                <img src={newsItem.Picture} className="PicNews"/>
                <div className="News__title">
                  <p>{newsItem.Time}</p>
                  <h2>{newsItem.Title}</h2>
                </div>
                  <div className="New__text">{newsItem.Text}</div>
              </div>
            ))}
          </div>

          <div className="News__box__2">
          {News.map((newsItem) => (
              <div className="News__item">
                <img src={newsItem.Picture1}  className="PicNews"/>
                <div className="News__title">
                  <p>{newsItem.Time1}</p>
                  <h2>{newsItem.Title1}</h2>
                </div>
                  <div className="New__text">{newsItem.Text1}</div>
              </div>
            ))}
            </div>
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

      <div className="Footer">
        <img src={Logo} alt="Logo1" className="FootLogo" />
        <div className="Footer_Text">
          “ Check out the trading strategies, opinions, <br />
          analytics at absolutely no cost! ”
        </div>
      </div>
      <div className="Button">
        <Link to="/Login">
          <button onClick={handleClick}>Go to Market</button>
        </Link>
      </div>
      <div className="Banner">
        <img src={Banner} alt="Banner" className="Mock"/>
        <img src={Moon} alt="Moon" className="Moon" />
      </div>
    </div>
  );
};
