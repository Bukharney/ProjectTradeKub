import React, { useState, useEffect, useRef } from "react";
import "./Wallet.css";
import { Stock, Transaction, Account } from "./DBWallet";
import { Link } from "react-router-dom";
import { value } from "../Navbar/Navbar.js";
import ApexCharts from "apexcharts";

export const Wallet = () => {
  const SortedStock = Stock.wallet.sort((a, b) => {
    return b.marketValue - a.marketValue;
  });

  const [click, setClick] = useState(false);
  const handleClick = () => {
    value.key = 0;
    setClick(!click);
  };

  const TotalWealth = SortedStock.reduce((acc, stock) => {
    return acc + stock.marketValue;
  }, 0);

  const TotalCashBalance = SortedStock.reduce((acc, stock) => {
    return acc + stock.totalcost;
  }, 0);

  const sortedTransactions = Transaction.List.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

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
    const series = SortedStock.map((stock) =>
      parseFloat(stock.marketValue.toFixed(2))
    );
    const labels = SortedStock.map((stock) => stock.symbol);

    SortedStock.forEach((stock, index) => {
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
            {TotalWealth.toFixed(2)}
          </div>
          <div className="THB__Balance">THB</div>

          <div className="balance__Total__Topic">
            Cash Balance
            <div className="balance__Total__Cash__Balance__value">
              {TotalCashBalance.toFixed(2)}
            </div>
          </div>

          <div className="wallet__Line__Available">
            <div className="balance__Total__Topic">
              Available
              <div className="wallet__Line__Available__value">
                {Account.account.map((account) => (
                  <div key={account.id}>{account.LineAvailable.toFixed(2)}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="Wallet__Creditlimit">
            <div className="balance__Total__Topic">
              Credit Limit
              <div className="wallet__Creditlimit__value">
                {Account.account.map((account) => (
                  <div key={account.id}>{account.CreditLimit.toFixed(2)}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="wallet__button__contactBroker">
            <Link
              to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="button__contactBroker"
              onClick={handleClick}
            >
              <button>Contact Broker</button>
            </Link>
          </div>
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
                    backgroundColor:
                      stock.percentChange >= 0 ? "#42A93C" : "#CD3D42",
                  }}
                >
                  {stock.percentChange >= 0
                    ? `+${stock.percentChange.toFixed(2)}%`
                    : `${stock.percentChange.toFixed(2)}%`}
                </div>
              </div>
              <div className="wallet__table__Topic">
                AVG Purchase Price
                <div className="wallet__table__AVGPurchase__value">
                  {stock.AVGPurchase.toFixed(2)}
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
                  {stock.totalcost.toFixed(2)}
                </div>
              </div>
              <div className="wallet__table__Topic">
                Market Value
                <div className="wallet__table__Maket__Value">
                  {stock.marketValue.toFixed(2)}
                </div>
              </div>
              <div className="wallet__table__Topic">
                Unrealized P/L
                <div
                  className="wallet__table__UnrealizedPL__value"
                  style={{
                    color: stock.UnrealizedPL >= 0 ? "#42A93C" : "#CD3D42",
                  }}
                >
                  {stock.UnrealizedPL >= 0
                    ? `+${stock.UnrealizedPL.toFixed(2)}%`
                    : `${stock.UnrealizedPL.toFixed(2)}%`}
                </div>
              </div>
              <div className="wallet__table__Topic">
                Unrealized P/L%
                <div
                  className="wallet__table__UnrealizedPLPercent__value"
                  style={{
                    color:
                      stock.UnrealizedPLPercent >= 0 ? "#42A93C" : "#CD3D42",
                  }}
                >
                  {stock.UnrealizedPLPercent >= 0
                    ? `+${stock.UnrealizedPLPercent.toFixed(2)}%`
                    : `${stock.UnrealizedPLPercent.toFixed(2)}%`}
                </div>
              </div>
              <div className="wallet__table__button">
                <Link
                  to="/Market"
                  className="wallet__table__button__value"
                  onClick={handleClick}
                >
                  <button>Place Order</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="transaction__list__container">
        <div className="transaction__box">
          <div className="transaction__list__title">Transaction List</div>

          <div className="transaction__list__box">
            {sortedTransactions.map((transaction, index) => (
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
                      {transaction.date}
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
