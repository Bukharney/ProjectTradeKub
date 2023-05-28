import React, { useEffect, useState, useContext } from "react";
import "./SelectAcc.css";
import { Account } from "./AccountDB.js";

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

  const handleAccountChange = (event) => {
    const selectedAccountId = event.target.value;
    const selectedAccount = account.find(
      (acc) => acc.AccID === selectedAccountId
    );
    if (selectedAccount) {
      // Update the broker and cash balance display based on the selected account
      document.getElementById("SelectedBroker").textContent =
        selectedAccount.BrokerID;
      document.getElementById("SelectedCashBalance").textContent =
        selectedAccount.CashBalance;
    } else {
      // Clear the broker and cash balance display if no account is selected
      document.getElementById("SelectedBroker").textContent = "";
      document.getElementById("SelectedCashBalance").textContent = "";
    }
  };

  useEffect(() => {
    data.map((item) => {
      if (item.id == selectedAccountId) {
        setSelectedCB(item.cash_balance);
        setSelectedBroker(item.broker_id);
      }
    });
  }, [selectedAccountId, selectedCB, selectedBroker]);

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
          <div className="Head-Text-SelectAcc-2">
            <div className="Slect__Logo">
              <img src={Logo} alt="Logo" />
            </div>
          </div>
        </div>
        <div className="TextBoxSelectAcc">
          <div className="SelectAccDropDownBox">
            <select
              id="SelectAccDropDown"
              className="SelectAccDropDown"
              onChange={handleAccountChange}
            >
              <option value="">Select an Account</option>
              {account.map((acc, index) => (
                <option key={index} value={acc.AccID}>
                  {acc.AccID}
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
