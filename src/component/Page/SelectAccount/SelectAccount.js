import React, { useEffect, useState, useContext } from "react";
import "./SelectAcc.css";
import axios from "axios";
import TokenContext from "../../../Context/TokenContext";
import AccountContext from "../../../Context/AccountContext";
import Logo from "./Logo.svg";
import Cookies from "js-cookie";

export const SelectAccount = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAccountId, setSelectedAccountId] = useState("");
  const [selectedCB, setSelectedCB] = useState("");
  const [selectedBroker, setSelectedBroker] = useState("");
  const Token = useContext(TokenContext);
  const { account, setAccount } = useContext(AccountContext);

  const handleChange = (e) => {
    setSelectedAccountId(e.target.value);
    console.log("e.target.value", e.target.value);
  };

  const handleAccountSelected = () => {
    console.log("selectedCB", selectedCB);
    console.log("selectedBroker", selectedBroker);
    console.log("account", account);
    window.location.href = "/Market";
  };

  const handleAccounEdittSelected = () => {
    window.location.href = "/EditUser";
  }

  useEffect(() => {
    data.map((item) => {
      if (item.id == selectedAccountId) {
        setSelectedCB(item.cash_balance);
        setSelectedBroker(item.broker_id);
      }
    });
    console.log(Cookies.set("account", selectedAccountId));
    console.log("Account", account);
  }, [selectedAccountId, selectedCB, selectedBroker]);

  useEffect(() => {
    const get_account = async () => {
      console.log("Token.token", Token.token);
      await axios
        .get(`https://www.tradekub.me/account/my`, {
          headers: {
            accept: "application/json",
            Authorization: "Bearer " + Token.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          setData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    get_account();
  }, []);

  if (isLoading) {
    return <div className="AllsectionSelectAcc">Loading...</div>;
  }

  return (
    <div className="AllsectionSelectAcc">
      <div className="boxSelectAcc">
        <div className="Head-Text-SelectAcc">
          Welcome to <br />
          <div className="Slect__Logo">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <div className="TextBoxSelectAcc">
          <div className="SelectAccDropDownBox">
            <select
              id="SelectAccDropDown"
              className="SelectAccDropDown"
              onChange={handleChange}
            >
              <option value="">Select an Account</option>
              {data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.id}
                </option>
              ))}
            </select>
          </div>
          <div className="SelectBrokerIDandCash_Box">
            <div className="SelectBrokerIDandCash_Text">Broker</div>
            <div className="SelectBrokerIDandCash_Data">{selectedBroker}</div>
          </div>
          <div className="SelectBrokerIDandCash_Box">
            <div className="SelectBrokerIDandCash_Text">Cash Balance</div>
            <div className="SelectBrokerIDandCash_Data">{selectedCB}</div>
          </div>
        </div>
        <div className="BoxFooterSelectAcc">
          <button className="GoToMarket" onClick={handleAccountSelected}>
            Go To Market
          </button>
          <button className="AccEdit"
          onClick={handleAccounEdittSelected}
          >Edit user Profile</button>
        </div>
      </div> 
    </div>
  );
};

export default SelectAccount;
