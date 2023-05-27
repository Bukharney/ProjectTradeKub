import React from "react";
import "./Register.css";
import background from "./background.svg";

export const Register = () => {
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
        <div className="TextBoxInsert">
          <input type="text" placeholder="E-mail" />
        </div>
        <div className="TextBoxInsert">
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="TextBoxInsert">
          <input type="text" placeholder="Username" />
        </div>
        <div className="TextBoxInsert">
          <input type="text" placeholder="Password" />
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
 export default Register