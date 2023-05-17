import React, { useState, useContext } from "react";
import AuthContext from "../../../Context/AuthContext";
import TokenContext from "../../../Context/TokenContext";
import Cookies from "js-cookie";
import axios from "axios";

export const Market = () => {
  const [data, setData] = useState("");
  const Auth = React.useContext(AuthContext);
  const Token = React.useContext(TokenContext);
  const handleonclick = () => {
    Auth.setAuth(false);
    Cookies.remove("token");
  };
  let toke = Token.token;

  const getdata = async (a) => {
    axios
      .get("https://www.tradekub.me/users/1", {
        headers: {
          Authorization: `Bearer ${toke}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <h2>Home</h2>
      <div className="button">
        <button onClick={handleonclick}>Logout</button>
      </div>
      <div className="button">
        <button onClick={getdata}>getdata</button>
      </div>
    </>
  );
};
