import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = "http://localhost:8000";

export const handleLogin = async (data) => {
  return await axios
    .post("/login", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((response) => {
      console.log(response);
      Cookies.set("token", response.data.access_token);
      return true;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
};

export const cancelOrder = async (
  id,
  cancelPin,
  Token,
  setUserOrder,
  Account
) => {
  const data = {
    id: id,
    pin: Number(cancelPin),
  };

  await axios
    .post("/order/cancel", data, {
      headers: {
        accep: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + Token.token,
      },
    })
    .then((response) => {
      console.log(response);
      alert("Cancle order successfull");
      const get_order = async (e) => {
        await axios
          .get(`/order/${e}`, {
            headers: {
              accept: "application/json",
              Authorization: "Bearer " + Token.token,
            },
          })
          .then((response) => {
            console.log(response.data);
            setUserOrder(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      };
      get_order(Account.account);
    })
    .catch((error) => {
      console.error(error.data);
      alert("Cancle order failed please try again");
    });
};

export const placeOrder = async (data, Token, Account) => {
  await axios
    .post("/order", data, {
      headers: {
        accep: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + Token.token,
      },
    })
    .then((response) => {
      console.log(response);
      alert("Order successfull");
      const get_order = async (e) => {
        await axios
          .get(`/order/${e}`, {
            headers: {
              accept: "application/json",
              Authorization: "Bearer " + Token.token,
            },
          })
          .then((response) => {
            console.log(response.data);
            return response.data;
          })
          .catch((error) => {
            console.error(error);
          });
      };
      get_order(Account.account);
    })
    .catch((error) => {
      console.error(error.data);
      alert("Order failed please try again");
    });
};

export const getSearchStock = async (symbol, Token) => {
  await axios
    .get(`/stock/search/${symbol}`, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + Token.token,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
