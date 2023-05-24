import React, { useState, useEffect, useRef } from "react";
import "./Profile.css";
import { Stock, Transaction, Account, Device } from "./DBProfile";
import { Link } from "react-router-dom";
import { value } from "../Navbar/Navbar.js";
import ApexCharts from "apexcharts";
import "boxicons/css/boxicons.min.css";

export const Profile = () => {
  const SortedStock = Stock.wallet.sort((a, b) => {
    return b.marketValue - a.marketValue;
  });

  const SortedDeviceLogin = Device.Login.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const [click, setClick] = useState(false);
  const handleClick = () => {
    value.key = 1;
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
    <div className="Profile__container">
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
                    <div key={account.id}>
                      {account.LineAvailable.toFixed(2)}
                    </div>
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
      </div>

      <div className="profile__container__Bank__Transaction__List">
        <div className="profile__container__Bank__Transaction__Container">
          <div className="profile__container__Bank__Transaction__BOX">
            <div className="profile__container__Bank__Transaction__List__title">
              Bank Transaction List
            </div>
            <div className="profile__container__List__box">
              {sortedTransactions.map((transaction, index) => (
                <div className="profile__container__List">
                  <div
                    className="profile__container__transaction__item"
                    key={index}
                  >
                    <div className="profile__transaction__details">
                      <span
                        className="Wallet__transaction__side"
                        style={{
                          color:
                            transaction.type === "Deposit"
                              ? "#42A93C"
                              : "#CD3D42",
                        }}
                      >
                        {transaction.type}
                      </span>
                      <span
                        className="profile__transaction___topic"
                        style={{ color: "#4E4F51" }}
                      >
                        Amount
                      </span>
                      <span className="profile__amount__value">
                        {transaction.amount.toFixed(2)}
                      </span>
                      <span className="profile__transaction___date">
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

      <div className="profile__Account___container">
        <div className="profile__Account__container__box">
          <div className="profile__Account__container__title">
            Account Information
          </div>
          <div className="profile__Account__ID">
            Account ID
            <span className="profile__Account__ID__value">
              {Account.account.map((account) => account.ID)}
            </span>
          </div>
          <div className="profile__Account__Verified">
            <div className="CheckVerified" class="bx bxs-badge-check"></div>
            <span className="VerifiedText">Verified</span>
          </div>

          <div className="profile__Account__Broker">
            Broker
            <span className="profile__Account__Broker__value">
              {Account.account.map((account) => account.Broker)}
            </span>
          </div>

          <div className="profile__Account__PersonalInformation">
            Personal Information
          </div>

          <div className="profile__Account__Topic">
            Account Name
            <span className="profile__Account__Name__value">
              {Account.account.map((account) => account.Username)}
            </span>
          </div>

          <div className="profile__Account__Topic">
            Phone Number
            <span className="profile__Account__PhoneNumber__value">
              {Account.account.map((account) => account.PhoneNumber)}
            </span>
          </div>
          <div className="profile__Account__Topic">
            Email
            <span className="profile__Account__Email__value">
              {Account.account.map((account) => account.EmailAddress)}
            </span>
          </div>

          <div className="profile__Account__LogOut">
            <Link to="/login" className="profile__Account__LogOut__button">
              <button onClick={handleClick}>Log Out</button>
            </Link>
          </div>

          <div className="Login__device">
            <div className="profile__Account__Topic">Device Log in </div>
            <div className="Login__device__box">
              {SortedDeviceLogin.map((login, index) => (
                <div className="Login__device__item__List">
                <div className="Login__device__item" key={index}>
                  <div className="Login__device__item__detail">
                    <span className="Login__device__item__name">
                      {login.device}
                    </span>
                    <span className="Login__device__IPaddress">
                      {login.IPAddress}
                    </span>
                    <span className="Login__device__date">
                      {login.date} {login.time}
                    </span>
                  </div> </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};