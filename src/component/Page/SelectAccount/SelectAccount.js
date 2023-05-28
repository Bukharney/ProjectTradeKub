import React from "react";
import "./SelectAcc.css";
import { Account } from "./AccountDB.js";

export const SelectAccount = () => {
  const { account } = Account;

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

  return (
    <div className="AllsectionSelectAcc">
      <div className="boxSelectAcc">
        <div className="Head-Text-SelectAcc">
          Welcome to <br />
          TradeKub
        </div>
        <div className="TextUsernameSelectAcc">UsernameFromLogin</div>
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
            <div
              className="SelectBrokerIDandCash_Data"
              id="SelectedBroker"
            ></div>
          </div>
          <div className="SelectBrokerIDandCash_Box">
            <div className="SelectBrokerIDandCash_Text">Cash Balance</div>
            <div
              className="SelectBrokerIDandCash_Data"
              id="SelectedCashBalance"
            ></div>
          </div>
        </div>
        <div className="BoxFooterSelectAcc">
          <button className="GoToMarket">Go To Market</button>
          <button className="AccEdit">Edit Account</button>
        </div>
      </div>
    </div>
  );
};

export default SelectAccount;
