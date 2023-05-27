import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./AnalyticPage.css";
import TableWithBlankRow from "./TableWithBlankRow";
import TableWithoutBlankRow from "./TableWithoutBlankRow";
import { tablesColumns, tablesRows } from "./AnalyticData";
import Logo from "./Logo.svg";

let index = 0;

export const AnalyticPage = () => {
  const [click, setClick] = useState(false);

  const handleClick = (i) => {
    index = i;
    setClick(!click);
  };

  const [inputBorderColor1, setInputBorderColor1] = useState("");
  const [inputBorderColor2, setInputBorderColor2] = useState("");
  const [inputBorderColor3, setInputBorderColor3] = useState("");
  const [inputBorderColor4, setInputBorderColor4] = useState("");
  const [inputBorderColor5, setInputBorderColor5] = useState("");
  const [inputBorderColor6, setInputBorderColor6] = useState("");
  const [inputBorderColor7, setInputBorderColor7] = useState("");
  const [inputBorderColor8, setInputBorderColor8] = useState("");

  const handleInputFocus1 = () => {
    setInputBorderColor1("#CCFF00");
    setInputBorderColor5("#282A2E");
  };

  const handleInputBlur1 = () => {
    setInputBorderColor1("");
    setInputBorderColor5("");
  };

  const handleInputFocus2 = () => {
    setInputBorderColor2("#CCFF00");
    setInputBorderColor6("#282A2E");
  };

  const handleInputBlur2 = () => {
    setInputBorderColor2("");
    setInputBorderColor6("");
  };

  const handleInputFocus3 = () => {
    setInputBorderColor3("#CCFF00");
    setInputBorderColor7("#282A2E");
  };

  const handleInputBlur3 = () => {
    setInputBorderColor3("");
    setInputBorderColor7("");
  };

  const handleInputFocus4 = () => {
    setInputBorderColor4("#CCFF00");
    setInputBorderColor8("#282A2E");
  };

  const handleInputBlur4 = () => {
    setInputBorderColor4("");
    setInputBorderColor8("");
  };

  return (
    <div>
      <div className="GovernmentView__container">
        <div className="GovernmentView__data__container">
          <div className="GovernmentView__Header__container">
            <img src={Logo} alt="logo" className="GovernmentView__logo" />
            <div className="GovermentView__title">Analytics Report</div>
          </div>
          <div className="Analytics__data__container__table">
            <button
              className="Analytic__container__button"
              style={{
                backgroundColor: inputBorderColor1,
                color: inputBorderColor5,
              }}
              onClick={() => handleClick(1)}
              onFocus={handleInputFocus1}
              onBlur={handleInputBlur1}
            >
              Most Volume Sum <br /> by Company
            </button>

            <button
              className="Analytic__container__button"
              style={{
                backgroundColor: inputBorderColor2,
                color: inputBorderColor6,
              }}
              onClick={() => handleClick(2)}
              onFocus={handleInputFocus2}
              onBlur={handleInputBlur2}
            >
              Most new Contract <br /> by Broker Company
            </button>

            <button
              className="Analytic__container__button"
              style={{
                backgroundColor: inputBorderColor3,
                color: inputBorderColor7,
              }}
              onFocus={handleInputFocus3}
              onBlur={handleInputBlur3}
              onClick={() => handleClick(3)}
            >
              Most closed stock value <br /> by date
            </button>

            <button
              className="Analytic__container__button"
              style={{
                backgroundColor: inputBorderColor4,
                color: inputBorderColor8,
              }}
              onFocus={handleInputFocus4}
              onBlur={handleInputBlur4}
              onClick={() => handleClick(4)}
            >
              Most Cancel Ratio <br /> by date
            </button>
          </div>

          <div className="Analytic__data_______container">
            <div className="Analytic__data__table__container__size">
              {index === 1 && (
                <TableWithoutBlankRow
                  columns={tablesColumns[0]}
                  rows={tablesRows[0]}
                />
              )}
              {index === 2 && (
                <TableWithoutBlankRow
                  columns={tablesColumns[1]}
                  rows={tablesRows[1]}
                />
              )}
              {index === 3 && (
                <TableWithoutBlankRow
                  columns={tablesColumns[2]}
                  rows={tablesRows[2]}
                />
              )}
              {index === 4 && (
                <TableWithoutBlankRow
                  columns={tablesColumns[3]}
                  rows={tablesRows[3]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticPage;
