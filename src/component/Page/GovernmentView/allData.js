//ดึงข้อมูลทุกแถวของแต่ละ Table ลงนี่เลย เดะ query ใน databaseTable.js เอา
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import TokenContext from "../../../Context/TokenContext";
import AccountContext from "../../../Context/AccountContext";

export let UserData = [
  {
    user_id: 2,
    username: "Bob",
    password: "abc",
    registered_date: "1990-01-30",
    email: "bob@mail",
    phone_number: "087",
  },
  {
    user_id: 3,
    username: "A",
    password: "a",
    registered_date: "1990-01-30",
    email: "A@mail",
    phone_number: "087",
  },
  {
    user_id: 3,
    username: "A",
    password: "a",
    registered_date: "1990-01-30",
    email: "A@mail",
    phone_number: "087",
  },
  {
    user_id: 3,
    username: "A",
    password: "a",
    registered_date: "1990-01-30",
    email: "A@mail",
    phone_number: "087",
  },
  {
    user_id: 3,
    username: "A",
    password: "a",
    registered_date: "1990-01-30",
    email: "A@mail",
    phone_number: "087",
  },
  {
    user_id: 3,
    username: "A",
    password: "a",
    registered_date: "1990-01-30",
    email: "A@mail",
    phone_number: "087",
  },
  {
    user_id: 3,
    username: "A",
    password: "a",
    registered_date: "1990-01-30",
    email: "A@mail",
    phone_number: "087",
  },
  {
    user_id: 3,
    username: "A",
    password: "a",
    registered_date: "1990-01-30",
    email: "A@mail",
    phone_number: "087",
  },
  {
    user_id: 3,
    username: "A",
    password: "a",
    registered_date: "1990-01-30",
    email: "A@mail",
    phone_number: "087",
  },
  {
    user_id: 3,
    username: "A",
    password: "a",
    registered_date: "1990-01-30",
    email: "A@mail",
    phone_number: "087",
  },
  {
    user_id: 3,
    username: "A",
    password: "a",
    registered_date: "1990-01-30",
    email: "A@mail",
    phone_number: "087",
  },
];
export let AccountData = [
  {
    account_id: 0,
    broker_id: 2,
    user_id: 2,
    cash_balance: 20,
    line_available: 20,
    credit_limit: 20,
    pin: "123",
    contracted_datetime: "1990-03-01",
  },
  {
    account_id: 1,
    broker_id: 2,
    user_id: 2,
    cash_balance: 20,
    line_available: 20,
    credit_limit: 20,
    pin: "123",
    contracted_datetime: "1990-03-02",
  },
  {
    account_id: 2,
    broker_id: 2,
    user_id: 2,
    cash_balance: 20,
    line_available: 20,
    credit_limit: 20,
    pin: "123",
    contracted_datetime: "1990-03-03",
  },

  {
    account_id: 3,
    broker_id: 2,
    user_id: 3,
    cash_balance: 20,
    line_available: 20,
    credit_limit: 20,
    pin: "123",
    contracted_datetime: "1990-03-28",
  },

  {
    account_id: 4,
    broker_id: 3,
    user_id: 3,
    cash_balance: 200,
    line_available: 200,
    credit_limit: 200,
    pin: "123",
    contracted_datetime: "1990-03-29",
  },
];
export let BrokerData = [
  {
    broker_id: 2,
    organization_name: "KBANK",
    api_key: "adasdasdsa",
  },
  {
    broker_id: 3,
    organization_name: "KRUNGTHEP",
    api_key: "adasdasdsa",
  },
];

//https://forum.5paisa.com/portal/en/kb/articles/types-of-stock-trading-order-and-its-validity
export let StockOrderData = [
  {
    order_id: 2,
    account_id: 2,
    stock_symbol: "ABC",
    order_type: "Market Order",
    order_volume: 900,
    order_price: 12,
    order_datetime: "1999-05-01",
    order_status: 1,
    stock_balance: 300,
    matched: 600,
    cancelled: 0,
    validity: "Day Order",
    side: "Buy",
  },
  {
    order_id: 3,
    account_id: 2,
    stock_symbol: "ABC",
    order_type: "Market Order",
    order_volume: 900,
    order_price: 12,
    order_datetime: "1999-05-01",
    order_status: 1,
    stock_balance: 300,
    matched: 600,
    cancelled: 0,
    validity: "Day Order",
    side: "Buy",
  },
];
export let StockTransData = [
  {
    stock_transaction_id: 2,
    order_id: 2,
    transaction_datetime: "1990-01-30",
    transaction_volume: 10,
    transaction_price: 10,
  },
  {
    stock_transaction_id: 2,
    order_id: 3,
    transaction_datetime: "1990-01-28",
    transaction_volume: 10,
    transaction_price: 10,
  },
];
export let BankTransData = [
  {
    bank_transaction_id: 2,
    account_id: 2,
    type: "Deposit",
    amount: 991231,
    transaction_datetime: "1990-02-30",
  },
];
export let TurnoverData = [
  {
    stock_symbol: "ABC",
    datetime: "1999-05-12",
    asset: 12,
    dept: 1,
    P_per_BV: 2,
    EPS: 32,
    divident_per_unit: 10,
    net_profit: 20,
  },
];
export let LogInOutData = [
  {
    user_id: 2,
    login_datetime: "1999-02-15",
    logout_datetime: "1999-04-15",
    device: "Android",
    ip_address: "127.0.1",
  },
];
export let CompanyData = [
  {
    stock_symbol: "ABC",
    company_name: "ABCD",
    stock_industry: "food",
    market_value: 12,
    volume: 200,
    address: "Bankok",
    tel: "087",
    website: "www.asdasd",
    registered_capital: 999,
    establish_date: "1000-01-01",
    ipo_price: 12,
    free_float: 23,
    mojor_shareholder: 30,
  },
];
export let DividentData = [
  {
    divident_transaction_id: 2,
    account_id: 2,
    transaction_datetime: "1999-04-15",
    stock_symbol: "ABC",
    value: 20,
  },
];
export let NewsData = [
  {
    stock_symbol: "ABC",
    news_datetime: "1999-05-05",
    stock_symbol: "ABC",
    contents: "กล้วยตานีปลายหวีเหี่ยว",
    news_datetime: "1999-09-15",
    files: "asdasdasdasd",
  },
];

let isLoading = true;

export const AllDataUpdate = () => {
  /*userRows,
        accountRows,
        brokerRows,
        bankTransitionRows,
        stockOrderRows,
        stockTransactionRows,
        loginLogoutRows,
        companyDetailsRows,
    
        turnoverRows,
        dividendRows,
        newsRows,*/

  const Token = useContext(TokenContext);
  let [UserDataServer, setUser] = useState([]);
  let [AccountDataServer, setAccount] = useState([]);
  let [BrokerDataServer, setBroker] = useState([]);
  let [BankTransDataServer, setBankTrans] = useState([]);

  let [StockOrderDataServer, setOrder] = useState([]);
  let [StockTransDataServer, setStockTrans] = useState([]);
  let [LoginoutDataServer, setLoginout] = useState([]);
  let [CompanyDataServer, setCompany] = useState([]);

  let [TurnoverDataServer, setTurnover] = useState([]);
  let [DividentDataServer, setDivident] = useState([]);
  let [NewsDataServer, setNews] = useState([]);

  const Get_user_data = async () => {
    await axios
      .get(`https://www.tradekub.me/users/`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Get_account_data = async () => {
    await axios
      .get(`https://www.tradekub.me/account/all`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setAccount(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Get_broker_data = async () => {
    await axios
      .get(`https://www.tradekub.me/broker/`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setBroker(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Get_banktrans_data = async () => {
    await axios
      .get(`https://www.tradekub.me/bank_tsc/`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setBankTrans(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Get_StockOrder_data = async () => {
    await axios
      .get(`https://www.tradekub.me/order/all`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setOrder(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Get_StockTrans_data = async () => {
    await axios
      .get(`https://www.tradekub.me/stock/transactions/all`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setStockTrans(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Get_LoginLogout_data = async () => {
    await axios
      .get(`https://www.tradekub.me/users/login_info/all`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setLoginout(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Get_Company_data = async () => {
    await axios
      .get("https://www.tradekub.me/stock/company_info/all", {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setCompany(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Get_Turnover_data = async () => {
    await axios
      .get("https://www.tradekub.me/turnover/all", {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setTurnover(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Get_Divident_data = async () => {
    await axios
      .get(`https://www.tradekub.me/dividend/`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setDivident(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Get_News_data = async () => {
    await axios
      .get(`https://www.tradekub.me/news/`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setNews(response.data);
        isLoading = false;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    Get_user_data();
    Get_account_data();
    Get_broker_data();
    Get_banktrans_data();

    Get_StockOrder_data();
    Get_StockTrans_data();
    Get_LoginLogout_data();
    Get_Company_data();

    Get_Turnover_data();
    Get_Divident_data();
    Get_News_data();
  }, []);
  UserData = UserDataServer.sort(
    (a, b) =>
      b.id - a.id
  );
  AccountData = AccountDataServer.sort(
    (a, b) =>
    b.created_at.toLowerCase().localeCompare(a.created_at.toLowerCase())
    );
  BrokerData = BrokerDataServer.sort(
    (a, b) =>
      b.created_at.toLowerCase().localeCompare(a.created_at.toLowerCase())
  );
  StockOrderData = StockOrderDataServer.sort(
    (a, b) =>
    b.time.toLowerCase().localeCompare(a.time.toLowerCase())
    );

  BankTransData = BankTransDataServer.sort(
    (a, b) =>
    b.timestamp.toLowerCase().localeCompare(a.timestamp.toLowerCase())
    );

  StockTransData = StockTransDataServer.sort(
    (a, b) =>
      b.id - a.id
  );
  LogInOutData = LoginoutDataServer.sort(
    (a, b) =>
    b.login.toLowerCase().localeCompare(a.login.toLowerCase())
  );
  CompanyData = CompanyDataServer.sort((a, b) => a.symbol.toLowerCase().localeCompare(b.symbol.toLowerCase()));


  TurnoverData = TurnoverDataServer.sort(
    (a, b) =>
      b.id - a.id
  );
  DividentData = DividentDataServer.sort(
    (a, b) =>
      b.id - a.id
  );
  NewsData = NewsDataServer.sort(
    (a, b) =>
    b.id - a.id
    );
  return isLoading;
};

/*userRows,
        accountRows,
        brokerRows,
        bankTransitionRows,
        stockOrderRows,

        stockTransactionRows,
        loginLogoutRows,
        companyDetailsRows,
    
        turnoverRows,
        dividendRows,
        newsRows,*/
