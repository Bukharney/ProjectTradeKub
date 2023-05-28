import React, { useEffect, useState, useContext } from "react";
import "./GovernmentView.css";
import Table from "./Table";
import {
  SearchFunction,
  Updating,
  GettingRoleIndex,
  SearchGeting,
  tablesColumns,
  tablesRows,
} from "./databaseTables.js";
import Logo from "./Logo.svg";
import axios from "axios";
import TokenContext from "../../../Context/TokenContext";
import TableMapping from "./TableMap";
import { AllDataUpdate } from "./allData";

let storedRoleIndex = localStorage.getItem("roleI");
let defaultRoleI = 0;
let roleIndex = storedRoleIndex ? JSON.parse(storedRoleIndex) : defaultRoleI;

let storedLabel = localStorage.getItem("Label");
let defaultLabel = "";
let loading = false;

export const GovernmentView = () => {
  const [role, setRole] = useState("admin");
  const [Label, setLabel] = useState(defaultLabel);
  const [userData, setUserData] = useState([]);
  const [table, setTable] = useState("");
  const Token = useContext(TokenContext);

  const [index, setIndex] = useState(-1);

  const handleClick = (i) => {
    setTable(i);
    console.log(i);
  };

  const handleClick2 = (i) => {
    roleIndex = i;
    localStorage.setItem("roleI", JSON.stringify(roleIndex));
    localStorage.setItem("Label", JSON.stringify(""));
    window.location.reload();
  };

  const handleInputChange = (event) => {
    setLabel(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("Label", JSON.stringify(Label));
    window.location.reload();
  };

  const RoleNames = ["User", "Broker", "Government", "Admin", "Company"];

  const tableNames = [
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    ["Company Details", "Turnover", "Divident", "News"], //<only company can view these
  ];

  const [FocusBG_GV1, InputFocusBG_GV1] = useState("");

  const handleInputFocusBG_GV1 = () => {
    InputFocusBG_GV1("#CCFF00");
  };

  useEffect(() => {
    const get_all_users = async () => {
      await axios
        .get(`https://www.tradekub.me/users/`, {
          headers: {
            accept: "application/json",
            Authorization: "Bearer " + Token.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          setUserData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const get_all_brokers = async () => {
      await axios
        .get(`https://www.tradekub.me/broker/`, {
          headers: {
            accept: "application/json",
            Authorization: "Bearer " + Token.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          setUserData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    get_all_brokers();
    get_all_users();
  }, [role]);

  return (
    <div className="GovernmentView__container">
      <GettingRoleIndex roleIndexGet={roleIndex} />
      <SearchGeting
        ViewerLabelGet={storedLabel ? JSON.parse(storedLabel) : defaultLabel}
      />
      <SearchFunction></SearchFunction>
      <Updating></Updating>
      {(loading = <AllDataUpdate></AllDataUpdate>)}

      {loading === true ? (
        "sdadas"
      ) : (
        <div className="GovernmentView__data__container">
          <div className="GovernmentView__Header__container">
            <img src={Logo} alt="logo" className="GovernmentView__logo" />
            <div className="GovermentView__title">Table Views</div>
          </div>
          <div className="GovernmentView__data__container__table">
            {tableNames[roleIndex].map((tableName, i) => (
              <div className="GovernmentView__container__button">
                <button
                  style={{
                    backgroundColor: index === i ? FocusBG_GV1 : "",
                    color: index === i ? "#282A2E" : "",
                  }}
                  key={i}
                  className="table__Box"
                  onFocus={handleInputFocusBG_GV1}
                  onClick={() => handleClick(i)}
                >
                  {tableName}
                </button>
              </div>
            ))}
          </div>

          <div className="GovernmentView__data_______container">
            <div className="GovernmentView__data__table__container">
              <div className="GovernmentView__data__table__container__size">
                {table === "" && <TableMapping data={userData} />}
              </div>{" "}
            </div>
            <div className="GovernmentView__Role__container">
              {RoleNames.map((RoleName, i) => (
                <div className="GovernmentView__container__button" key={i}>
                  <button
                    style={{
                      backgroundColor: roleIndex === i ? "#CCFF00" : "",
                      color: roleIndex === i ? "#282A2E" : "",
                    }}
                    className="table__Box"
                    onClick={() => handleClick2(i)}
                  >
                    {RoleName}
                  </button>
                </div>
              ))}

              {roleIndex == 0 && (
                <form onSubmit={handleSubmit}>
                  <div className="GovernmentView__container____serch__input">
                    <i class="bx bx-search"></i>
                    <input
                      type="text"
                      value={Label}
                      className="GovernmentView__insert__button"
                      onChange={handleInputChange}
                      placeholder="Username"
                      // กรอกฟอร์ม username/broker organization/ไม่ต้องกรอกถ้าเป็น company,government หรือ admin
                    />
                  </div>
                  <button type="submit" className="GovernmentView__src__button">
                    Submit
                  </button>
                </form>
              )}

              {roleIndex === 1 && (
                <form onSubmit={handleSubmit}>
                  <div className="GovernmentView__container____serch__input">
                    <i class="bx bx-search"></i>
                    <input
                      type="text"
                      value={Label}
                      className="GovernmentView__insert__button"
                      onChange={handleInputChange}
                      placeholder="Broker name"
                    />
                  </div>
                  <button type="submit" className="GovernmentView__src__button">
                    <p>Submit</p>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default GovernmentView;
