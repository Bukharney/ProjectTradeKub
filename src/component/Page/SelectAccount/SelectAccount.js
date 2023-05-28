import React, { useEffect, useState, useContext } from "react";
import "./SelectAcc.css";
import { Account } from "./AccountDB.js";
import axios from "axios";
import TokenContext from "../../../Context/TokenContext";

export const SelectAccount = () => {
  const { account } = Account;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAccountId, setSelectedAccountId] = useState("");
  const [selectedCB, setSelectedCB] = useState("");
  const [selectedBroker, setSelectedBroker] = useState("");
  const Token = useContext(TokenContext);

  const handleAccountChange = (event) => {
    setSelectedAccountId(event.target.value);
    data.map((item) => {
      if (item.id == selectedAccountId) {
        setSelectedCB(item.cash_balance);
        setSelectedBroker(item.broker_id);
      }
    });
    console.log(selectedAccountId);
  };

  const handleAccountSelected = () => {
    console.log("selectedCB", selectedCB);
    console.log("selectedBroker", selectedBroker);
    Account.account = selectedAccountId;
    console.log("Account.account", Account.account);
  };

  useEffect(() => {
    const get_account = async () => {
      console.log("Token.token", Token.token);
      await axios
        .get(`https://www.tradekub.me/account/`, {
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
          TradeKub
        </div>
        <div className="TextBoxSelectAcc">
          <div className="SelectAccDropDownBox">
            <select
              id="SelectAccDropDown"
              className="SelectAccDropDown"
              onChange={handleAccountChange}
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
          <button className="AccEdit">Edit Account</button>
        </div>
      </div>
    </div>
  );
};

export default SelectAccount;
