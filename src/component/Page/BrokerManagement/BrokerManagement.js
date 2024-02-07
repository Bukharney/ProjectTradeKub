import React, { useContext, useState } from "react";
import "./BrokerManagement.css"; // Import the CSS file for additional styles
import axios from "axios";
import TokenContext from "../../../Context/TokenContext";

export const BrokerManagement = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const [InputBox0, setInputBox0] = useState("");

  const [InputBox1, setInputBox1] = useState("");
  const [InputBox2, setInputBox2] = useState("");

  const [InputBox6, setInputBox6] = useState("");
  const [InputBox3, setInputBox3] = useState("");
  const [InputBox4, setInputBox4] = useState("");
  const [InputBox5, setInputBox5] = useState("");

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
    setInputBox1("");
    setInputBox3("");
    setInputBox4("");
    setInputBox5("");
    setInputBox6("");
  };

  const Token = useContext(TokenContext);
  let retreiveValue = [{}];
  let retreiveValue2 = [{}];

  // Function to handle input change
  const handleInputChange0 = (event) => {
    setInputBox0(event.target.value);
  };

  const handleInputChange1 = (event) => {
    setInputBox1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputBox2(event.target.value);
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

  const UserExist = async (u) => {
    try {
      const response = await axios.get(
        `https://www.tradekub.me/users/username/${u}`,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + Token.token,
          },
        }
      );
      console.log(response.data);
      return 1; // Resolving the Promise with the desired value
    } catch (error) {
      console.error(error);
      return 0; // Resolving the Promise with the desired value
    }
  };

  const Get_user_data = async (u) => {
    await axios
      .get(`https://www.tradekub.me/users/username/${u}`, {
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

  const OrderExist = async (b) => {
    try {
      const response = await axios.get(
        `https://www.tradekub.me/order/one/${b}`,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + Token.token,
          },
        }
      );

      console.log(response);
      return 1; // Resolving the Promise with the desired value
    } catch (error) {
      console.error(error);
      return 0; // Resolving the Promise with the desired value
    }
  };

  const Get_order_data = async (a) => {
    await axios
      .get(`https://www.tradekub.me/order/one/${a}`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        retreiveValue2 = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const CreateAccount = async ({ InputBox0, InputBox2, InputBox3 }) => {
    const data = {
      user_id: Number(retreiveValue.id),
      broker_id: Number(InputBox0),
      cash_balance: 0,
      line_available: 0,
      credit_limit: Number(InputBox3),
      pin: Number(InputBox2),
    };

    await axios
      .post("https://www.tradekub.me/account/", data, {
        headers: {
          accep: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response);
        alert("Create account successfull");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error.data);
        alert("Create account failed please try again");
      });
  };

  const AddStockTransaction = async () => {
    const data = {
      order_id: retreiveValue2.id,
      price: Number(InputBox4),
      volume: Number(InputBox3),
    };

    await axios
      .post("https://www.tradekub.me/stock/transactions", data, {
        headers: {
          accep: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response);
        alert("commit stock transaction successfull");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error.data);
        alert("stock transaction failed please try again");
      });
  };

  const UpdateAccountMoney = async (b) => {
    const data = {
      user_id: retreiveValue.user_id,
      broker_id: retreiveValue.broker_id,
      cash_balance: retreiveValue.cash_balance,
      line_available: retreiveValue.line_available + Number(InputBox3),
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
      })
      .catch((error) => {
        console.error(error.data);
        alert("Update account balance failed please try again");
        window.location.reload();
      });
  };

  const UpdateOrder = async (b) => {
    let sum = Number(InputBox3) * Number(InputBox4);
    const data = {
      user_id: retreiveValue.user_id,
      broker_id: retreiveValue.broker_id,
      cash_balance: retreiveValue.cash_balance,
      line_available: retreiveValue.line_available + sum,
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
      })
      .catch((error) => {
        console.error(error.data);
        alert("Update order failed please try again");
        window.location.reload();
      });
  };

  const Get_stock_data = async (a) => {
    await axios
      .get(`https://www.tradekub.me/account/${a}`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        retreiveValue2 = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const AddDividendTransaction = async () => {
    const data = {
      symbol: InputBox2,
      account_id: Number(InputBox1),
      value: Number(InputBox3),
    };

    await axios
      .post("https://www.tradekub.me/dividend/", data, {
        headers: {
          accep: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response);
        alert("commit stock transaction successfull");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error.data);
        alert("stock transaction failed please try again");
      });
  };

  const Get_port_data = async (a) => {
    await axios
      .get(`https://www.tradekub.me/portfolio/${a}`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        retreiveValue2 = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const AddBrokerData = async () => {
    const data = {
      name: InputBox1,
      api_key: InputBox2,
    };

    await axios
      .post("https://www.tradekub.me/broker/", data, {
        headers: {
          accep: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response);
        alert("Add broker successfull");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error.data);
        alert("Add broker failed please try again");
      });
  };

  //ฟอร์มนี้ทำทั้ง add (bank transaction) และ update (account)
  const handleSubmit2 = (event) => {
    event.preventDefault();
    (async () => {
      await AddBrokerData();
      window.location.reload();
    })();

    // Perform any necessary actions with the input value
    /*
         if(InputBox1 ไม่เจอใน database){
            alert('Cannot find the account id')
            window.location.reload();
        }
        else if(InputBox1(account) มี แต่ broker_id ไม่ตรงกับ InputBox0 (broker ID))
        {
            alert('the account isn't belong to your broker')
            window.location.reload();
 
        }
        else if(InputBox2(stock symbol) ไม่มีใน database)
        {
            alert('Cannot find the stock symbol')
            window.location.reload();
        }
        else if(isNaN(InputBox3)|| InputBox3 === '')
        {
            alert('Wrong format of amount')
            window.location.reload();
        }
         else {
         //เตรียมยัดข้อมูลตรงนี้ 
                InputBox1(account),2(stock symbol),3(amount) กับ TIMESTAMP จะ insert ข้อมูลของ Bank_Transaction_Table
                InputBox3(Amount) ไปอัพเดท cash_balance กับ line_available ของ InputBox1(account)
         /*InputBox1 //account Id ที่ต้องการอัพเดท
        InputBox2 //stock symbol 
        InputBox3 //amount
         */
    //******************** Edit*/
  };

  return (
    <div>
      <pre className="ManagementHeader">
        <br></br>Broker
        <br></br>Management
      </pre>

      <div>
        <form onSubmit={handleSubmit2}>
          <input
            type="text"
            value={InputBox1}
            onChange={handleInputChange1}
            placeholder="Broker Company name..."
            className="box_1_forSearchB"
          />
          <input
            type="text"
            value={InputBox2}
            onChange={handleInputChange2}
            placeholder="Api key..."
            className="box_2_inputB"
          />

          <button type="submit" className="submitTransaction2">
            Add Broker
          </button>
        </form>
        <button className="resetTransaction2" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default BrokerManagement;
