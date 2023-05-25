import React, { useState, useContext } from "react";
import AuthContext from "../../../Context/AuthContext";
import TokenContext from "../../../Context/TokenContext";
import Cookies from "js-cookie";

export const Market = () => {
  const Auth = React.useContext(AuthContext);
  const handleonclick = () => {
    Auth.setAuth(false);
    Cookies.remove("token");
    window.location.href = "/Login";
  };

  return (
    <div className="button">
      <button onClick={handleonclick}>Logout</button>
    </div>
  );
};
