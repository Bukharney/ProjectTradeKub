import React, { useState } from "react";
import "./Register.css";
import background from "./background.svg";

const Register = () => {
  const [inputBorderColor1, setInputBorderColor1] = useState("");
  const [inputBorderColor2, setInputBorderColor2] = useState("");
  const [inputBorderColor3, setInputBorderColor3] = useState("");
  const [inputBorderColor4, setInputBorderColor4] = useState("");

  const handleInputFocus1 = () => {
    setInputBorderColor1("#CCFF00");
  };

  const handleInputBlur1 = () => {
    setInputBorderColor1("");
  };

  const handleInputFocus2 = () => {
    setInputBorderColor2("#CCFF00");
  };

  const handleInputBlur2 = () => {
    setInputBorderColor2("");
  };

  const handleInputFocus3 = () => {
    setInputBorderColor3("#CCFF00");
  };

  const handleInputBlur3 = () => {
    setInputBorderColor3("");
  };

  const handleInputFocus4 = () => {
    setInputBorderColor4("#CCFF00");
  };

  const handleInputBlur4 = () => {
    setInputBorderColor4("");
  };

  const handleBack = () => {
    window.location.href = "/Login";
  };

  return (
    <div className="AllsectionRegis">
      <div className="boxRegis">
        <div className="Head-Text">
          Create new <br />
          TradeKub account
        </div>
        <div
          className="TextBoxInsert1"
          style={{ borderColor: inputBorderColor1 }}
        >
          <input
            type="text"
            placeholder="E-mail"
            onFocus={handleInputFocus1}
            onBlur={handleInputBlur1}
          />
        </div>
        <div
          className="TextBoxInsert2"
          style={{ borderColor: inputBorderColor2 }}
        >
          <input
            type="text"
            placeholder="Phone Number"
            onFocus={handleInputFocus2}
            onBlur={handleInputBlur2}
          />
        </div>
        <div
          className="TextBoxInsert3"
          style={{ borderColor: inputBorderColor3 }}
        >
          <input
            type="text"
            placeholder="Username"
            onFocus={handleInputFocus3}
            onBlur={handleInputBlur3}
          />
        </div>
        <div
          className="TextBoxInsert4"
          style={{ borderColor: inputBorderColor4 }}
        >
          <input
            type="text"
            placeholder="Password"
            onFocus={handleInputFocus4}
            onBlur={handleInputBlur4}
          />
        </div>
        <div className="CancelConfirm">
          <button className="RegisCancel" onClick={handleBack}>
            Cancel
          </button>
          <button className="RegisConfirm">Confirm</button>
        </div>
      </div>
      <img className="Reis___background" src={background} alt="background" />
    </div>
  );
};

export default Register;