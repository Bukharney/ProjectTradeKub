import React, { useState, useContext } from "react";
import "./Login.css";
import background from "./background.svg";
import show_password from "./show_password.svg";
import hide_password from "./hide_password.svg";
import { Navigate } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext";
import TokenContext from "../../../Context/TokenContext";
import Cookies from "js-cookie";
import axios from "axios";

export const Login = () => {
  const Auth = useContext(AuthContext);
  const Token = React.useContext(TokenContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const data = {
      username: username,
      password: password,
    };
    const news = async () => {
      let res = await axios
        .post("https://www.tradekub.me/login", data, {
         headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          } ,
        })
        .then((response) => {
          console.log(response);
          Cookies.set("token", response.data.access_token, { expires: 1 });
          Auth.setAuth(true);
          Token.setToken(response.data.access_token);
          return response;
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage("Please check your information again");
        });
      return res;
    };
    let x = await news();
    if (x) {
      window.location.href = "/Market";
    }
  };

  return (
    <div className="Allsection">
      <div className="Container">
        <div className="Text">
          <div className="Header">
            <div className="Welcomeback">Welcome Back</div>
            <div className="Enterdetail">Please enter your details.</div>
          </div>

          <div className="Insert">
            <div className="Username">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="Password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <div className="Showpassword" style={{ position: "relative" }}>
                {password && (
                  <img
                    src={showPassword ? hide_password : show_password}
                    alt="Toggle Password Visibility"
                    onClick={handleTogglePassword}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="ErrorMessage">{errorMessage}</div>
          <div className="button">
            <button onClick={handleLogin}>Log in</button>
          </div>
        </div>
      </div>
      <img className="background" src={background} alt="background" />
    </div>
  );
};
