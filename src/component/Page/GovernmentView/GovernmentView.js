import React, { useState } from "react";
import "./GovernmentView.css";
import Table from "./Table";
import { tablesColumns, tablesRows } from "./databaseTables";
import Logo from "./Logo.svg";

export const GovernmentView = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
    setIndex(i);
  };

  const tableNames = [
    "User",
    "Account",
    "Broker",
    "Bank Transition",
    "StockOrder",
    "Stock Transaction",
    "Login/Logout",
    "Company Details",
    "Turnover",
    "Divident",
    "News",
  ];

  return (
    <div className="GovernmentView__container">
      <div className="GovernmentView__data__container">
        <div className="GovernmentView__Header__container">
            <img src={Logo} alt="logo" className="GovernmentView__logo" />
          <div className="GovermentView__title">Table Views</div>
        </div>
        <div className="GovernmentView__data__container__table">
          {tableNames.map((tableName, i) => (
            <div className="GovernmentView__container__button">
              <button
                key={i}
                className="table__Box"
                onClick={() => handleClick(i)}
              >
                {tableName}
              </button>
            </div>
          ))}
        </div>
        {index > -1 && (
          <Table columns={tablesColumns[index]} rows={tablesRows[index]} />
        )}
      </div>
    </div>
  );
};

export default GovernmentView;
