import React, { useState } from "react";
import "./Login.css";
import { users } from "./DB_Login";
import background from "./background.svg";
import show_password from "./show_password.svg";
import hide_password from "./hide_password.svg";
import Logo from "./Logo.svg";
import { Navigate} from "react-router-dom";

export const Login = () => {
  const [brokerId, setBrokerId] = useState("Select Broker ID");
  const [accountId, setAccountId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  function handleLogin() {
    const user = users.find(
      (u) =>
        u.brokerId === brokerId &&
        u.accountId === accountId &&
        u.password === password
    );
    if (user) {
      console.log(
        `Broker ID: ${brokerId}, Account ID: ${accountId}, Password: ${password}`
      );
      setBrokerId("");
      setAccountId("");
      setPassword("");
      setShowPassword(false);
      setErrorMessage("");
      setIsLoggedIn(true);
    } else {
      setErrorMessage("Please check your information again");
    }
  }

  if (isLoggedIn) {
    return <Navigate to="/Market" />;
  }

  return (
    <div className="Allsection">
      <div className="Background">
        <img className="background" src={background} alt="background" />
      </div>
      
      <div className="Container">
      <div><img className="Logo" src={Logo} alt="Logo"/></div>
        <div className="Text">
        
          <div className="Header">
          
            <div className="Welcomeback">Welcome Back</div>
            <div className="Enterdetail">Please enter your details.</div>
          </div>

          <div className="Insert">
            <div className="BrokerID">
              <select
                value={brokerId}
                onChange={(e) => setBrokerId(e.target.value)}
              >
                <option value="">Select Broker</option>
                {users.map((user) => (
                  <option key={user.brokerId} value={user.brokerId}>
                    {user.accountId}
                  </option>
                ))}
              </select>
            </div>

            <div className="AccountID">
              <input
                type="text"
                placeholder="Account ID"
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
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
    </div>
  );
}