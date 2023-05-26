import React from "react";
import './Register.css'

const Register = () => {

  const handleBack=()=>{window.location.href = "/Login"; }

  return (
    <div className="AllsectionRegis">
      <div className="boxRegis">
        <div className="Head-Text">Create new <br/>TradeKub account</div>
          <div className="TextBoxInsert">
            <input
              type='text'
              placeholder="E-mail"
            />
          </div>
          <div className="TextBoxInsert">
            <input
              type='text'
              placeholder="Phone Number"
            />
          </div>
          <div className="TextBoxInsert">
            <input
              type='text'
              placeholder="Username"
            />
          </div>
          <div className="TextBoxInsert">
            <input
              type='text'
              placeholder="Password"
            />
          </div>
          <button className="CancelConfirm">
          <button className="RegisCancel" onClick={handleBack}>Cancel</button>
            <div className="RegisConfirm">Confirm</div>
          </button>
      </div>
    </div>
  );
};

export default Register;
