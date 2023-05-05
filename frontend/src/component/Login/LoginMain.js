import React, { useState } from "react";
import "./Styles.css";
import BGF from "./SVG/BGF.svg";
import EyeOff from "./SVG/EyeOff.svg";
import EyeOn from "./SVG/EyeOn.svg";

function Login() {
  const [brokerId, setBrokerId] = useState("Select Broker ID");
  const [accountId, setAccountId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  function handleLogin() {
    if (
      brokerId === "broker2" &&
      accountId === "BigZlnwza" &&
      password === "1234"
    ) {
      console.log(
        `Broker ID: ${brokerId}, Account ID: ${accountId}, Password: ${password}`
      );
      alert("Login Success");
      setBrokerId("");
      setAccountId("");
      setPassword("");
      setShowPassword(false);
      setErrorMessage("");
    } else {
      setErrorMessage("Please check your information again");
    }
  }

  function handleLogin() {
    if (
      brokerId === "broker2" &&
      accountId === "BigZlnwza" &&
      password === "1234"
    ) {
      console.log(
        `Broker ID: ${brokerId}, Account ID: ${accountId}, Password: ${password}`
      );
      alert("Login Success");
      setBrokerId("");
      setAccountId("");
      setPassword("");
      setShowPassword(false);
      setErrorMessage("");
    } else {
      setErrorMessage("Please check your information again");
    }
  }

  return (
    <div className="Allsection">
      <img className="BGF" src={BGF} alt="BGF" />
      <div className="Text">
        <div className="Header">
          <div className="WelcomeBack">Welcome Back</div>
          <div className="EnterDetail">Please enter your details.</div>
        </div>

        <div className="Insert">
          <div className="Line">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <div className="BrokerId">
            <select
              value={brokerId}
              onChange={(e) => setBrokerId(e.target.value)}
            >
              <option value="">Select Broker</option>
              <option value="broker1">Bigboss</option>
              <option value="broker2">BigZ</option>
              <option value="broker3">Peerapat</option>
              <option value="broker3">OckZa</option>
            </select>
          </div>

          <div className="AccountId">
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
                  src={showPassword ? EyeOff : EyeOn}
                  alt="Toggle Password Visibility"
                  onClick={handleTogglePassword}
                />
              )}
            </div>
          </div>
        </div>
        <div className="ErrorMessage">{errorMessage}</div>
        <div className="Button">
          <button onClick={handleLogin}>Log in</button>
        </div>
      </div>
    </div>
  );
}
export default Login;
