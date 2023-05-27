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

  return (
    <div>
      <div className="GovernmentView__container">
        <div className="GovernmentView__data__container">
          <div className="GovernmentView__Header__container">
            <img src={Logo} alt="logo" className="GovernmentView__logo" />
            <div className="GovermentView__title">Analytics Report</div>
          </div>
          <div className="Analytics__data__container__table">
            <div className="Analytic__container__button">
              <button className="Box" onClick={() => handleClick(1)}>
                Most Volume Sum <br /> by Company
              </button>
            </div>
            <div className="Analytic__container__button">
              <button className="Box" onClick={() => handleClick(2)}>
                Most new Contract <br /> by Broker Company
              </button>
            </div>

            <div className="Analytic__container__button">
              <button className="Box" onClick={() => handleClick(3)}>
                Most closed stock value <br /> by date
              </button>
            </div>

            <div className="Analytic__container__button">
              <button className="Box" onClick={() => handleClick(4)}>
                Most Cancel Ratio <br /> by date
              </button>
            </div>
          </div>

          <div className="Analytic__data_______container">
          <div className="Analytic__data__table__container__size">
          {index === 1 && (
            <TableWithBlankRow
              columns={tablesColumns[0]}
              rows={tablesRows[0]}
            />
          )}{" "}
          {index === 2 && (
            <TableWithoutBlankRow
              columns={tablesColumns[1]}
              rows={tablesRows[1]}
            />
          )}{" "}
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
        </div></div></div>
      </div>
    </div>
  );
};

export default AnalyticPage;
