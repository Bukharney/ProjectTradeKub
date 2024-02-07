import React, { useState, useContext, useEffect } from "react";
import "./Login.css";
import background from "./background.svg";
import show_password from "./show_password.svg";
import hide_password from "./hide_password.svg";
import { Navigate } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext";
import Cookies from "js-cookie";
import axios from "axios";

export const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    window.location.href = "/Register";
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
        .post("https://tradekub.me/login", data, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          console.log(response);
          Cookies.set("token", response.data.access_token);
          setAuth(true);
          console.log(auth);
          console.log(Cookies.get("token"));
          window.location.href = "/SelectAccount";
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage("Please check your information again");
        });
      return res;
    };
    await news();
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
            <form>
              <div className="Username">
                <input
                  type="text"
                  placeholder="Email"
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
            </form>
          </div>
          <div className="ErrorMessage">{errorMessage}</div>
          <div className="button">
            <button onClick={handleLogin}>Log in</button>
          </div>
          <div className="RegisText">
            Don't have an account ? {"  "}
            <button className="RegisTextButton" onClick={handleRegister}>
              <u>Register</u>
            </button>
          </div>
        </div>
      </div>
      <img className="background" src={background} alt="background" />
    </div>
  );
};
