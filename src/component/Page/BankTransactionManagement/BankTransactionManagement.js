import React, { useContext, useState } from "react";
import "./BankTransactionManagement.css"; // Import the CSS file for additional styles
import axios from "axios";
import TokenContext from "../../../Context/TokenContext";

export const BankTransactionManagement = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const [InputBox0, setInputBox0] = useState("");

  const [InputBox1, setInputBox1] = useState("");
  const [InputBox6, setInputBox6] = useState("");
  const [InputBox3, setInputBox3] = useState("");
  const [InputBox4, setInputBox4] = useState("");
  const [InputBox5, setInputBox5] = useState("");

  const Token = useContext(TokenContext);
  let retreiveValue = [{}];

  const handleReset = () => {
    setInputBox1("");
    setInputBox6("");
    setInputBox3("");
    setInputBox4("");
    setInputBox5("");
    setSelectedButton("");
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  // Function to handle input change
  const handleInputChange0 = (event) => {
    setInputBox0(event.target.value);
  };

  const handleInputChange1 = (event) => {
    setInputBox1(event.target.value);
  };
  const handleInputChange3 = (event) => {
    setInputBox3(event.target.value);
  };
  const handleInputChange4 = (event) => {
    setInputBox4(event.target.value);
  };
  const handleInputChange5 = (event) => {
    setInputBox5(event.target.value);
  };
  const handleInputChange6 = (event) => {
    setInputBox6(event.target.value);
  };

  const BrokerExist = async (b) => {
    try {
      const response = await axios.get(`https://www.tradekub.me/broker/${b}`, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + Token.token,
        },
      });

      console.log(response.data);
      return 1; // Resolving the Promise with the desired value
    } catch (error) {
      console.error(error);
      return 0; // Resolving the Promise with the desired value
    }
  };

  // const UserExist = async (u) => {
  //   try {
  //     const response = await axios.get(
  //       `https://www.tradekub.me/users/username/${u}`,
  //       {
  //         headers: {
  //           accept: "application/json",
  //           "Content-Type": "application/json",
  //           Authorization: "Bearer " + Token.token,
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //     return 1; // Resolving the Promise with the desired value
  //   } catch (error) {
  //     console.error(error);
  //     return 0; // Resolving the Promise with the desired value
  //   }
  // };

  // const Get_user_data = async (u) => {
  //   await axios
  //     .get(`https://www.tradekub.me/users/username/${u}`, {
  //       headers: {
  //         accept: "application/json",
  //         Authorization: "Bearer " + Token.token,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       retreiveValue = response.data;
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const Get_account_data = async (a) => {
    await axios
      .get(`https://www.tradekub.me/account/${a}`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        retreiveValue = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const AccountExist = async (b) => {
    try {
      const response = await axios.get(`https://www.tradekub.me/account/${b}`, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + Token.token,
        },
      });

      console.log(response);
      return 1; // Resolving the Promise with the desired value
    } catch (error) {
      console.error(error);
      return 0; // Resolving the Promise with the desired value
    }
  };

  // const CreateAccount = async ({ InputBox0, InputBox2, InputBox3 }) => {
  //   const data = {
  //     user_id: Number(retreiveValue.id),
  //     broker_id: Number(InputBox0),
  //     cash_balance: 0,
  //     line_available: 0,
  //     credit_limit: Number(InputBox3),
  //     pin: Number(InputBox2),
  //   };

  //   await axios
  //     .post("https://www.tradekub.me/account/", data, {
  //       headers: {
  //         accep: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + Token.token,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       alert("Create account successfull");
  //       window.location.reload();
  //     })
  //     .catch((error) => {
  //       console.error(error.data);
  //       alert("Create account failed please try again");
  //     });
  // };

  const CreateBankTransaction = async () => {
    const data = {
      account_id: Number(InputBox1),
      account_number: InputBox3,
      type: selectedButton,
      amount: Number(InputBox4),
    };

    await axios
      .post("https://www.tradekub.me/bank_tsc/", data, {
        headers: {
          accep: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error.data);
        alert(selectedButton);
        alert("Add Transaction failed please try again");
      });
  };

  const UpdateAccountMoney = async (b) => {
    const data = {
      user_id: retreiveValue.user_id,
      broker_id: retreiveValue.broker_id,
      cash_balance: Number(InputBox5),
      line_available: Number(InputBox6),
      credit_limit: retreiveValue.credit_limit,
      pin: retreiveValue.pin,
    };

    await axios
      .put(`https://www.tradekub.me/account/${InputBox1}`, data, {
        headers: {
          accep: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response);
        alert("Update account balance success");
      })
      .catch((error) => {
        console.error(error.data);
        alert("Update account balance failed please try again");
      });
  };

  //ฟอร์มนี้ทำทั้ง add (bank transaction) และ update (account)
  const handleSubmit2 = (event) => {
    event.preventDefault();
    (async () => {
      await Get_account_data(InputBox1);
      if ((await BrokerExist(InputBox0)) === 0) {
        alert("Cannot find your broker ID");
        window.location.reload();
      } else if ((await AccountExist(Number(InputBox1))) === 0) {
        alert("Cannot find the Account");
        window.location.reload();
      } else if (retreiveValue.broker_id !== Number(InputBox0)) {
        alert("the account isn't belong to your broker");
        window.location.reload();
      } else if (
        selectedButton !== "deposit" &&
        selectedButton !== "withdraw"
      ) {
        alert("Please select the transaction type");
        window.location.reload();
      } else if (
        isNaN(InputBox3) ||
        !Number.isInteger(Number(InputBox3)) ||
        InputBox3.length !== 10
      ) {
        alert("Wrong format of bank account number[10 digit number]");
        window.location.reload();
      } else if (isNaN(InputBox4) || InputBox4 === "") {
        alert("Wrong format of amount");
        window.location.reload();
      } else if (isNaN(InputBox5) || InputBox5 === "") {
        alert("Wrong format of new line available");
        window.location.reload();
      } else if (isNaN(InputBox6) || InputBox6 === "") {
        alert("Wrong format of new cash balance");
        window.location.reload();
      } else {
        await CreateBankTransaction();
        await UpdateAccountMoney();
      }
    })();
  };

  return (
    <div>
      <pre className="ManagementHeader">
        Account
        <br></br>Bank Transaction
        <br></br>Management
      </pre>
      <div className="button-group">
        <button
          className={`buttonDeposit ${
            selectedButton === "deposit" ? "selected" : ""
          }`}
          onClick={() => handleButtonClick("deposit")}
        >
          Deposit
        </button>
        <button
          className={`buttonWithdraw ${
            selectedButton === "withdraw" ? "selected" : ""
          }`}
          onClick={() => handleButtonClick("withdraw")}
        >
          Withdraw
        </button>
      </div>

      <div>
        <form onSubmit={handleSubmit2}>
          <input
            type="text"
            value={InputBox1}
            onChange={handleInputChange1}
            placeholder="Existing account ID..."
            className="box_1_forSearch"
          />
          <input
            type="text"
            value={InputBox3}
            onChange={handleInputChange3}
            placeholder="Bank account number..."
            className="box_3_input"
          />
          <input
            type="text"
            value={InputBox4}
            onChange={handleInputChange4}
            placeholder="Amount..."
            className="box_4_input"
          />

          <input
            type="text"
            value={InputBox5}
            onChange={handleInputChange5}
            placeholder="New line available..."
            className="box_5_input"
          />
          <input
            type="text"
            value={InputBox6}
            onChange={handleInputChange6}
            placeholder="New cash balance..."
            className="box_6_input"
          />

          <button type="submit" className="submitTransaction">
            Confirm transaction
          </button>
        </form>
        <button className="resetTransaction" onClick={handleReset}>
          Reset
        </button>
      </div>

      <input
        type="text"
        value={InputBox0}
        onChange={handleInputChange0}
        placeholder="Your broker ID..."
        className="brokerBox"
      />
    </div>
  );
};

export default BankTransactionManagement;
