import React, { useState, useContext } from "react";
import "./Login.css";
import background from "./background.svg";
import show_password from "./show_password.svg";
import hide_password from "./hide_password.svg";
import AuthContext from "../../../Context/AuthContext";
import { handleLogin } from "../../../API/API";

export const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const login = () => {
    return async (e) => {
      e.preventDefault();
      const data = {
        username: username,
        password: password,
      };
      const result = await handleLogin(data);
      if (result) {
        setAuth(true);
        console.log("auth", auth);
        window.location.href = "/SelectAccount";
        console.log("Login Success");
      } else {
        setErrorMessage("Invalid username or password");
      }
    };
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    window.location.href = "/Register";
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
                  id="username"
                  type="text"
                  placeholder="Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="Password">
                <input
                  id="password"
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
            <button onClick={login()}>Log in</button>
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
