import React, { useState, useEffect } from "react";
import "./PopUP.css";

const PopUP = ({ selectedStock, pin, handlePinChange, handleCancelOrder, handleOkClick }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [inputBorderColor4, setInputBorderColor4] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleInputFocus4 = () => {
    setInputBorderColor4("#CCFF00");
  };

  const handleInputBlur4 = () => {
    setInputBorderColor4("");
  };

  return (
    <div>
      {isOpen && (
        <div className="PopupOverlay">
          <div className="PopupContent">
            <h2>Cancel Order</h2>
            <p>
              Enter your PIN to cancel <br />
              here its not work ? 
              {selectedStock}
            </p>
            <input
              style={{ borderColor: inputBorderColor4 }}
              type="password"
              placeholder="PIN"
              onFocus={handleInputFocus4}
              onBlur={handleInputBlur4}
              value={pin}
              onChange={handlePinChange}
            />
            <div className="ButtonGroup">
              <button className="CancelButton" onClick={handleCancelOrder}>
                Cancel
              </button>
              <button className="OkButton" onClick={handleOkClick}>
                Confirm Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUP;