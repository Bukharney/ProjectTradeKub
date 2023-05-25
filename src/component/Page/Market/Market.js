import React, { useState, useContext } from "react";
import AuthContext from "../../../Context/AuthContext";
import TokenContext from "../../../Context/TokenContext";
import Cookies from "js-cookie";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "./Market.css";

export const Market = () => {
  const [data, setData] = useState("");
  const Auth = React.useContext(AuthContext);
  const Token = React.useContext(TokenContext);
  const handleonclick = () => {
    Auth.setAuth(false);
    Cookies.remove("token");
    window.location.href = "/Login";
  };

  return (
    <>
      <div className="Allsection">
        <aside className="left">
          <div className="LeftTopContainer">
            <searchbox>Search Box</searchbox>
          </div>
          <div className="LeftBotContainer">
            LBot
            
          </div>
        </aside>
        <div className="mid">

          <div className="topY">
            <div className="midY1">
              <div className="midY1Left"> KBANK</div>
              <div className="midY1Right"> bid/offer</div>
            </div>
            <div className="midY2">HighLow</div>
            <div className="midY2">Time</div>
          </div>

          <div className="midY">
            MID
          </div>

          <footer className="bottomY">
           
            <item>
              1
            </item>
            <item>
              2
            </item>
            <item>
              3
            </item>

            <item>
              4
            </item>
            <item>
              5
            </item>
            <item>
              6
            </item>

            <item>
              7
            </item>
            <item>
              8
            </item>
            <item>
              9
            </item>

            <item>
              10
            </item>
            <item>
              11
            </item>
            <item>
              12
            </item>

          </footer>

        </div>
        <aside className="right">
          <div className="rightSplit">
            <div className="rightSplit-Header">Popular</div>
            <div className="rightSplit-Text">Symbol Price</div>
          </div>
          <div className="rightSplit">
            <div className="rightSplit-Header">Your Order</div>
          </div>
        </aside>
      </div>
      
  
    </>
  );
};
