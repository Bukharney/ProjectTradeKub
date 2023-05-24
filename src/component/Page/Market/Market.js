import React, { useState, useContext } from "react";
import AuthContext from "../../../Context/AuthContext";
import TokenContext from "../../../Context/TokenContext";
import Cookies from "js-cookie";
import axios from "axios";
import { Navigate } from "react-router-dom";

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
      <h2>Home</h2>
      <div className="button">
        <button onClick={handleonclick}>Logout</button>
      </div>
    </>
  );
};
