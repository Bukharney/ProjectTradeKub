import React, { useState, useEffect, useRef, useContext } from "react";
import "./Wallet.css";
import { Stock, Transaction, Account as Accounts } from "./DBWallet";
import { Link } from "react-router-dom";
import { value } from "../Navbar/Navbar.js";
import ApexCharts from "apexcharts";
import axios from "axios";
import TokenContext from "../../../Context/TokenContext";
import AccountContext from "../../../Context/AccountContext";

export const Wallet = () => {
  const Token = useContext(TokenContext);
  const Account = useContext(AccountContext);
  const [userPort, setUserPort] = useState([]);
  const [userAccount, setUserAccount] = useState([]);
  const [userTsc, setUserTsc] = useState([]);
  let total = 0;

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const SortedStock = userPort.sort((a, b) => {
    return b.volume * b.last_price - a.volume * a.last_price;
  });

  const [click, setClick] = useState(false);
  const handleClick = () => {
    value.key = 0;
    setClick(!click);
  };

  const sortedTransactions = Transaction.List.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  const calpl = (e) => {
    e["upl"] = e.volume * e.last_price - e.volume * e.avg_price;
    e["upl_per"] = ((e.last_price - e.avg_price) / e.avg_price) * 100;
  };

  const palettes = [
    "#00CB76",
    "#AD00FF",
    "#29B1C3",
    "#424CA0",
    "#C0A724",
    "#CD573D",
    "#B9B9B9",
  ];
  const chartRef = useRef(null);
  const colorRef = useRef({});

  useEffect(() => {
    const get_portfolio = async (e) => {
      await axios
        .get(`https://www.tradekub.me/portfolio/${e}`, {
          headers: {
            accept: "application/json",
            Authorization: "Bearer " + Token.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          setUserPort(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const get_account_info = async (e) => {
      await axios
        .get(`https://www.tradekub.me/account/${e}`, {
          headers: {
            accept: "application/json",
            Authorization: "Bearer " + Token.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          setUserAccount(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const get_account_tsc = async (e) => {
      await axios
        .get(`https://www.tradekub.me/stock/transactions/${e}`, {
          headers: {
            accept: "application/json",
            Authorization: "Bearer " + Token.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          setUserTsc(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    get_account_tsc(Account.account);
    get_account_info(Account.account);
    get_portfolio(Account.account);
  }, []);

  useEffect(() => {
    const series = SortedStock.map((stock) =>
      parseFloat(stock.volume * stock.last_price)
    );

    const labels = SortedStock.map((stock) => stock.symbol);

    userPort.forEach((stock, index) => {
      if (!colorRef.current[stock.symbol]) {
        colorRef.current[stock.symbol] = palettes[index % palettes.length];
      }
    });

    const chartOptions = {
      chart: {
        type: "donut",
      },
      series: series,
      labels: labels,
      colors: SortedStock.map((stock) => colorRef.current[stock.symbol]),
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.7,
          gradientToColors: ["#282A2E", "#000000"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      legend: {
        show: false,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: "120%",
                offsetY: 0.25,
                show: true,
              },
              value: {
                fontSize: "80%",
                color: "#ffffff",
                offsetY: -0.25,
                show: true,
                formatter: function (val) {
                  return val + "THB";
                },
              },
            },
          },
        },
      },
    };

    const chart = new ApexCharts(chartRef.current, chartOptions);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [SortedStock]);

  return (
    <div className="wallet__container">
      <div className="balance__container">
        <div className="balance__title">Your Balance</div>
        <div className="Donut__Chart" ref={chartRef}>
          <div className="balance__value__container"></div>
        </div>
        <div className="balance__container__text">
          <div className="balance__Total__Wealth">Total Wealth</div>
          <div className="balance__Total__Wealth__value">
            {userPort.map((stock) => {
              total += stock.last_price * stock.volume;
              calpl(stock);
            })}
            {total.toFixed(2)}
          </div>
          <div className="THB__Balance">THB</div>

          <div className="balance__Total__Topic">
            Cash Balance
            <div className="balance__Total__Cash__Balance__value">
              {userAccount.cash_balance ? (
                userAccount.cash_balance.toFixed(2)
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="wallet__Line__Available">
            <div className="balance__Total__Topic">
              Available
              <div className="wallet__Line__Available__value">
                {userAccount.line_available ? (
                  userAccount.line_available.toFixed(2)
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="Wallet__Creditlimit">
            <div className="balance__Total__Topic">
              Credit Limit
              <div className="wallet__Creditlimit__value">
                {userAccount.credit_limit ? (
                  userAccount.credit_limit.toFixed(2)
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>

          <button className="button__contactBroker">
            <Link
              to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="wallet__button__contactBroker"
              onClick={handleClick}
            >
              Contact Broker
            </Link>
          </button>
          <div className="wallet__description">
            Deposit and Withdraw Please contact the Broker
          </div>
        </div>
      </div>

      <div className="wallet__table__container">
        <div className="wallet__table__Header">Your Symbol</div>
        <div className="wallet__table__box">
          {SortedStock.map((stock, index) => (
            <div className="wallet__table__item" key={index}>
              <div className="wallet__table__CAL"> </div>
              <div className="wallet__table__symbol">{stock.symbol}</div>
              <div
                className="wallet__table__color"
                style={{
                  backgroundColor:
                    colorRef.current[stock.symbol] ||
                    palettes[index % palettes.length],
                }}
              ></div>

              <div className="wallet__table__Percent">
                CHG%
                <div
                  className="wallet__table__Percent__value"
                  style={{
                    backgroundColor: stock.change >= 0 ? "#42A93C" : "#CD3D42",
                  }}
                >
                  {stock.change >= 0
                    ? `+${stock.change.toFixed(2)}%`
                    : `${stock.change.toFixed(2)}%`}
                </div>
              </div>
              <div className="wallet__table__Topic">
                AVG Purchase Price
                <div className="wallet__table__AVGPurchase__value">
                  {stock.avg_price}
                </div>
              </div>
              <div className="wallet__table__Topic">
                Volume
                <div className="wallet__table__volume__value">
                  {stock.volume}
                </div>
              </div>
              <div className="wallet__table__Topic">
                Total Cost
                <div className="wallet__table__totalcost__value">
                  {(stock.volume * stock.avg_price).toFixed(2)}
                </div>
              </div>
              <div className="wallet__table__Topic">
                Market Value
                <div className="wallet__table__Maket__Value">
                  {stock.last_price.toFixed(2)}
                </div>
              </div>
              <div className="wallet__table__Topic">
                Unrealized P/L
                <div
                  className="wallet__table__UnrealizedPL__value"
                  style={{
                    color: stock.upl >= 0 ? "#42A93C" : "#CD3D42",
                  }}
                >
                  {stock.upl >= 0
                    ? `+${stock.upl.toFixed(2)}`
                    : `${stock.upl.toFixed(2)}`}
                </div>
              </div>
              <div className="wallet__table__Topic">
                Unrealized P/L%
                <div
                  className="wallet__table__UnrealizedPLPercent__value"
                  style={{
                    color: stock.upl_per >= 0 ? "#42A93C" : "#CD3D42",
                  }}
                >
                  {stock.upl2 >= 0
                    ? `+${stock.upl_per.toFixed(2)}%`
                    : `${stock.upl_per.toFixed(2)}%`}
                </div>
              </div>
              <button className="wallet__table__button__value">
                <Link
                  to="/Market"
                  className="wallet__table__button"
                  onClick={handleClick}
                >
                  Place Order
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="transaction__list__container">
        <div className="transaction__box">
          <div className="transaction__list__title">Transaction List</div>

          <div className="transaction__list__box">
            {userTsc.map((transaction, index) => (
              <div className="transaction__list">
                <div className="transaction__item" key={index}>
                  <div className="transaction__details">
                    <span
                      className="transaction__side"
                      style={{
                        color:
                          transaction.side === "Buy" ? "#42A93C" : "#CD3D42",
                      }}
                    >
                      {transaction.side}
                    </span>

                    <span className="transaction__symbol">
                      {transaction.symbol}
                    </span>
                    <span
                      className="transaction___topic"
                      style={{ color: "#4E4F51" }}
                    >
                      Volume
                    </span>
                    <span className="transaction__volume">
                      <span>{transaction.volume}</span>
                    </span>
                    <span
                      className="transaction___topic"
                      style={{ color: "#4E4F51" }}
                    >
                      Price
                    </span>
                    <span className="transaction__price">
                      {transaction.price.toFixed(2)}
                    </span>
                    <span
                      className="transaction___topic"
                      style={{ color: "#4E4F51" }}
                    >
                      Date
                    </span>
                    <span className="transaction__date">
                      {formatDate(transaction.timestamp)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
