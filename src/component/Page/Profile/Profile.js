import React, { useState, useEffect, useRef } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { value } from "../Navbar/Navbar.js";
import ApexCharts from "apexcharts";
import "boxicons/css/boxicons.min.css";
import AuthContext from "../../../Context/AuthContext";
import Cookies from "js-cookie";
import axios from "axios";
import TokenContext from "../../../Context/TokenContext";
import AccountContext from "../../../Context/AccountContext";
import LoadingOverlay from "react-loading-overlay";

export const Profile = () => {
  const Token = React.useContext(TokenContext);
  const Auth = React.useContext(AuthContext);
  const Accounts = React.useContext(AccountContext);
  const [userData, setUserData] = useState([]);
  const [userAccount, setUserAccount] = useState([]);
  const [userLog, setUserLog] = useState([]);
  const [userTsc, setUserTsc] = useState([]);
  const [userPort, setUserPort] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  let total = 0;

  const formatNumber = (Number) => {
    return Number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

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

  const handleClickLogout = () => {
    Auth.setAuth(false);
    Cookies.remove("token");
    Cookies.remove("account");
    window.location.href = "/";
  };

  const SortedStock = userPort.sort((a, b) => {
    if (a.market_status === "CLOSE_E") {
      return b.volume * b.close - a.volume * a.close;
    } else {
      return b.volume * b.last_price - a.volume * a.last_price;
    }
  });

  const [click, setClick] = useState(false);
  const handleClick = () => {
    value.key = 1;
    setClick(!click);
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
    const get_user_info = async () => {
      await axios
        .get(`https://www.tradekub.me/users/my`, {
          headers: {
            accept: "application/json",
            Authorization: "Bearer " + Token.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          setUserData(response.data);
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
          alert("Please Select Account");
          Cookies.remove("token");
          Auth.setAuth(false);
        });
    };

    const get_user_log = async () => {
      await axios
        .get(`https://www.tradekub.me/users/login_info`, {
          headers: {
            accept: "application/json",
            Authorization: "Bearer " + Token.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          setUserLog(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const get_tsc = async () => {
      await axios
        .get(`https://www.tradekub.me/bank_tsc/my`, {
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
          setIsloading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    get_user_info();
    get_account_info(Accounts.account);
    get_user_log();
    get_tsc();
    get_portfolio(Accounts.account);
  }, [Accounts.account, Token.token]);

  useEffect(() => {
    const series = SortedStock.map((stock) =>
      parseFloat(
        stock.volume * (stock.close == 0 ? stock.last_price : stock.close)
      )
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
      colors: userPort.map((stock) => colorRef.current[stock.symbol]),
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
                formatter: (val) => {
                  return "฿" + formatNumber(Number(val));
                },
              },
            },
          },
        },
      },
    };

    const chart = new ApexCharts(chartRef.current, chartOptions);
    chart.render();

    setTimeout(() => {
      setIsloading(false);
    }, 5000);

    return () => {
      chart.destroy();
    };
  }, [SortedStock, userPort, palettes]);

  return (
    <LoadingOverlay active={isLoading} spinner className="Profile__container">
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
                total +=
                  (stock.close == 0 ? stock.last_price : stock.close) *
                  stock.volume;
                return;
              })}
              {formatNumber(total)}
            </div>
            <div className="THB__Balance">THB</div>

            <div className="balance__Total__Topic">
              Cash Balance
              <div className="balance__Total__Cash__Balance__value">
                {userAccount.id ? (
                  formatNumber(userAccount.cash_balance)
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className="wallet__Line__Available">
              <div className="balance__Total__Topic">
                Available
                <div className="wallet__Line__Available__value">
                  <div>
                    {userAccount.id ? (
                      formatNumber(userAccount.line_available)
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="Wallet__Creditlimit">
              <div className="balance__Total__Topic">
                Credit Limit
                <div className="wallet__Creditlimit__value">
                  <div>
                    {userAccount.id ? (
                      formatNumber(userAccount.credit_limit)
                    ) : (
                      <></>
                    )}
                  </div>
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
      </div>

      <div className="profile__container__Bank__Transaction__List">
        <div className="profile__container__Bank__Transaction__Container">
          <div className="profile__container__Bank__Transaction__BOX">
            <div className="profile__container__Bank__Transaction__List__title">
              Bank Transaction List
            </div>
            <div className="profile__container__List__box">
              {userTsc.map((transaction, index) => (
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
                        {transaction.type.toUpperCase()}
                      </span>
                      <span
                        className="profile__transaction___topic"
                        style={{ color: "#4E4F51" }}
                      >
                        Amount
                      </span>
                      <span className="profile__amount__value">
                        {formatNumber(transaction.amount)}
                      </span>
                      <span className="profile__transaction___date">
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

      <div className="profile__Account___container">
        <div className="profile__Account__container__box">
          <div className="profile__Account__container__title">
            Account Information
          </div>
          <div className="profile__Account__ID">
            Account ID
            <span className="profile__Account__ID__value">
              {userAccount.id}
            </span>
          </div>
          <div className="profile__Account__Verified">
            <div className="CheckVerified" class="bx bxs-badge-check"></div>
            <span className="VerifiedText">Verified</span>
          </div>

          <div className="profile__Account__Broker">
            Broker
            <span className="profile__Account__Broker__value">
              {userAccount.broker_name}
            </span>
          </div>

          <div className="profile__Account__PersonalInformation">
            Personal Information
          </div>

          <div className="profile__Account__Topic">
            User Name
            <span className="profile__Account__Name__value">
              {userData.name}
            </span>
          </div>

          <div className="profile__Account__Topic">
            Phone Number
            <span className="profile__Account__PhoneNumber__value">
              {userData.phone}
            </span>
          </div>
          <div className="profile__Account__Topic">
            Email
            <span className="profile__Account__Email__value">
              {userData.email}
            </span>
          </div>

          <button className="profile__Account__LogOut">
            <Link
              to="/"
              className="profile__Account__LogOut__button"
              onClick={handleClickLogout}
            >
              Log Out
            </Link>
          </button>

          <div className="Login__device">
            <div className="profile__Account__Topic">Device Log in </div>
            <div className="Login__device__box">
              {userLog.map((login, index) => (
                <div className="Login__device__item__List">
                  <div className="Login__device__item" key={index}>
                    <div className="Login__device__item__detail">
                      <span className="Login__device__item__name">
                        {login.device}
                      </span>
                      <span className="Login__device__IPaddress">
                        {login.ip}
                      </span>
                      <span className="Login__device__date">
                        {formatDate(login.login)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
};
