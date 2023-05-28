import React, { useEffect, useState, useContext } from "react";
import "./Market.css";
import { stock_market, User } from "./DBmarket";
import { stock_left, stock_status } from "./DBPop&Order";
import CandleChart from "./CandleChart";
import CandleChart2 from "./CandleChart2";
import CandleChart3 from "./CandleChart3";
import axios from "axios";
import TokenContext from "../../../Context/TokenContext";
import AccountContext from "../../../Context/AccountContext";
import { NumericFormat, PatternFormat } from "react-number-format";
import PopUP from "./PopUP";

export const Market = () => {
  const Token = useContext(TokenContext);
  const Account = useContext(AccountContext);
  const symbolData = stock_market.KBANK[0];
  const [isLoading, setIsloading] = useState(true);
  const [symbol, setSymbol] = useState("KBANK");
  const [marketData, setMarketData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Buy");
  const [Price, setPrice] = useState("");
  const [Volume, setVolume] = useState("");
  const [Pin, setPin] = useState("");
  const [inputBorderColor1, setInputBorderColor1] = useState("");
  const [inputBorderColor2, setInputBorderColor2] = useState("");
  const [inputBorderColor3, setInputBorderColor3] = useState("");
  const [userAccount, setUserAccount] = useState([]);
  const [userOrder, setUserOrder] = useState([]);
  const [userStock, setUserStock] = useState([]);
  const [userSearch, setUserSearch] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState("");
  const [inputBorderColor4, setInputBorderColor4] = useState("");

  const totalPrice = Number(Price) * Number(Volume);

  const formatNumber = (Number) => {
    return Number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  const togglePopup = (stock) => {
    setSelectedStock(stock);
    setIsPopupOpen(!isPopupOpen);
  };

  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  const handleCancelOrder = () => {
    console.log("Order Cancelled");
    togglePopup(null);
  };

  const handleOkClick = () => {
    console.log("OK Clicked");
    togglePopup(null);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleOrderClick = () => {
    console.log("Place order clicked");
    place_order();
  };

  const handleResetClick = () => {
    setPrice("");
    setVolume("");
    setPin("");
    console.log("Reset order clicked");
  };

  const handleSelectStock = (e) => {
    console.log(e);
    console.log(userSearch[e].symbol);
    setSymbol(userSearch[e].symbol);
  };

  const handleInputFocus1 = () => {
    setInputBorderColor1("#CCFF00");
  };

  const handleInputBlur1 = () => {
    setInputBorderColor1("");
  };

  const handleInputFocus2 = () => {
    setInputBorderColor2("#CCFF00");
  };

  const handleInputBlur2 = () => {
    setInputBorderColor2("");
  };

  const handleInputFocus3 = () => {
    setInputBorderColor3("#CCFF00");
  };

  const handleInputBlur3 = () => {
    setInputBorderColor3("");
  };

  const handleInputFocus4 = () => {
    setInputBorderColor4("#CCFF00");
  };

  const handleInputBlur4 = () => {
    setInputBorderColor4("");
  };

  const place_order = async (e) => {
    const data = {
      account_id: Account.account,
      symbol: symbol,
      type: "Normal",
      volume: Number(Volume),
      price: Number(Price),
      side: selectedOption,
      validity: "Day",
      pin: Number(Pin),
    };

    await axios
      .post("https://www.tradekub.me/order", data, {
        headers: {
          accep: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response);
        alert("Order successfull");
      })
      .catch((error) => {
        console.error(error.data);
        alert("Order failed please try again");
      });
  };

  const get_search_stock = async (symbol) => {
    await axios
      .get(`https://www.tradekub.me/stock/search/${symbol}`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUserSearch([...response.data, ...userSearch]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      get_search_stock(event.target.value);
    }
  };

  useEffect(() => {
    const get_market_data = async (symbol) => {
      await axios
        .get(`https://www.tradekub.me/stock/market_data/${symbol}`, {
          headers: {
            accept: "application/json",
            Authorization: "Bearer " + Token.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          setMarketData(response.data);
          setIsloading(false);
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

    const get_stock = async () => {
      await axios
        .get(`https://www.tradekub.me/stock/`, {
          headers: {
            accept: "application/json",
            Authorization: "Bearer " + Token.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          setUserStock(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const get_order = async (e) => {
      await axios
        .get(`https://www.tradekub.me/order/${e}`, {
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

    setTimeout(() => {
      get_market_data(symbol);
    }, 5000);
    get_order(Account.account);
    get_account_info(Account.account);
    get_stock();
  }, [Account.account, symbol, Token.token]);

  if (isLoading) {
    return (
      <div className="container__Loading">
        <div className="Market__container__Loading">
          <img
            src="https://media.tenor.com/I6kN-6X7nhAAAAAi/loading-buffering.gif"
            alt="Loading"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="Market__container">
      <div className="Market__container__left">
        <div className="Market__container__left__serch">
          <div className="Market__container__left__serch__input">
            <div className="srch__icon">
              <i class="bx bx-search"></i>
            </div>
            <div className="Market__container__left__serch__input__box">
              <input
                type="text"
                placeholder="Search symbols"
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        </div>
        <div className="Market__container__left__stock">
          <div className="Market__container__left__stock__Box">
            {userSearch.map((stock, index) => (
              <button key={index} onClick={() => handleSelectStock(index)}>
                <div className="Martket__left_div">
                  <div className="Market__container__left__stock__Box__stock__symbol">
                    {stock.symbol}
                  </div>
                  <div className="Market__container__left__stock__Box__stock__lastPrice">
                    Last Price
                    <div
                      className="Market__container__left__stock__Box__stock__lastPrice__value"
                      style={{
                        color: stock.change >= 0 ? "#42A93C" : "#CD3D42",
                      }}
                    >
                      {stock.close.toFixed(2)}
                    </div>
                  </div>
                  <div className="Market__container__left__stock__Box__stock__percentChange">
                    Change
                    <div
                      className="Market__container__left__stock__Box__stock__percentChange__value"
                      style={{
                        color: stock.change >= 0 ? "#42A93C" : "#CD3D42",
                      }}
                    >
                      {stock.change > 0
                        ? `+${stock.change.toFixed(2)}`
                        : `${stock.change.toFixed(2)}`}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="Market__container__mid">
        <div className="Market__container__mid__header">
          <div className="Market__container__mid__header__left">
            <div className="Market__container__symbol">
              <div className="Market__stock__symbol">Symbol</div>
              <div className="Market__stock__symbol__value">{symbol}</div>
            </div>
            <div className="Market__container__last_Price">
              <div className="Market__stock__Last_Price">last Price</div>
              <div
                className="Market__stock__Last_Price__value"
                style={{
                  color:
                    marketData.quote_symbol.percentChange >= 0
                      ? "#42A93C"
                      : "#CD3D42",
                }}
              >
                {formatNumber(
                  marketData.quote_symbol.last
                    ? marketData.quote_symbol.last
                    : 0
                )}
              </div>
            </div>
          </div>
          <div className="Market__container__mid__header__right">
            <div className="Market__container__width">
              <div className="Market__container__CHG">
                <div className="Market__stock__CHG">%CHG</div>
                <div
                  className="Market__stock__CHG__value"
                  style={{
                    color:
                      marketData.quote_symbol.change >= 0
                        ? "#42A93C"
                        : "#CD3D42",
                  }}
                >
                  {formatNumber(
                    marketData.quote_symbol.percentChange
                      ? marketData.quote_symbol.percentChange
                      : 0
                  )}
                  %
                </div>
              </div>
              <div className="Market__container__volume">
                <div className="Market__stock__volume">Bid Volume</div>
                <div className="Market__stock__volume__value">
                  {formatNumber(
                    marketData.bid_offer.bid_volume1
                      ? Number(marketData.bid_offer.bid_volume1)
                      : 0
                  )}
                </div>
              </div>
              <div className="Market__container__Bid_Price">
                <div className="Market__stock__Bid_Price">Bid Price</div>
                <div
                  className="Market__stock__Bid_Price__value"
                  style={{
                    color:
                      symbolData.percentChange >= 0 ? "#42A93C" : "#CD3D42",
                  }}
                >
                  {formatNumber(
                    marketData.bid_offer.bid_price1
                      ? marketData.bid_offer.bid_price1
                      : 0
                  )}
                </div>
              </div>
              <div className="Market__container__Offer_Price">
                <div className="Market__stock__Offer_Price">Offer Price</div>
                <div
                  className="Market__stock__Offer_Price__value"
                  style={{
                    color:
                      symbolData.percentChange >= 0 ? "#42A93C" : "#CD3D42",
                  }}
                >
                  {formatNumber(
                    marketData.bid_offer.ask_price1
                      ? marketData.bid_offer.ask_price1
                      : 0
                  )}
                </div>
              </div>
              <div className="Market__container__offer_volume">
                <div className="Market__stock__offer_volume">Offer Volume</div>
                <div className="Market__stock__offer_volume__value">
                  {formatNumber(
                    Number(
                      marketData.bid_offer.ask_volume1
                        ? marketData.bid_offer.ask_volume1
                        : 0
                    )
                  )}
                </div>
              </div>
              <div className="Market__container__total_volume">
                <div className="Market__stock__total_volume">Total Volume</div>
                <div className="Market__stock__total_volume__value">
                  {marketData.quote_symbol.totalVolume.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Market__container__mid__header__Lower">
          <div className="Market__container__mid__header__Lower__width">
            <span className="Market__stock__High">High</span>
            <span
              className="Market__stock__High__value"
              style={{
                color: "#42A93C",
              }}
            >
              {formatNumber(
                marketData.quote_symbol.high ? marketData.quote_symbol.high : 0
              )}
            </span>
            <span className="Market__stock__Low">Low</span>
            <span
              className="Market__stock__Low__value"
              style={{
                color: "#CD3D42",
              }}
            >
              {formatNumber(
                marketData.quote_symbol.low ? marketData.quote_symbol.low : 0
              )}
            </span>
            <span className="Market__stock__Open">Ceiling</span>
            <span
              className="Market__stock__Open__value"
              style={{
                color: "#42A93C",
              }}
            >
              {formatNumber(
                marketData.candlestick_1limit.open[0]
                  ? marketData.candlestick_1limit.open[0] * 1.3
                  : 0
              )}
            </span>
            <span className="Market__stock__floor">Floor</span>
            <span
              className="Market__stock__floor__value"
              style={{
                color: "#CD3D42",
              }}
            >
              {formatNumber(
                marketData.candlestick_1limit.open[0]
                  ? marketData.candlestick_1limit.open[0] * 0.7
                  : 0
              )}
            </span>
            <sapn className="Market__stock__Average">Average</sapn>
            <span className="Market__stock__Average__value">
              {formatNumber(
                marketData.quote_symbol.average
                  ? marketData.quote_symbol.average
                  : 0
              )}
            </span>
            <sapn className="Market__stock__Close">Close</sapn>
            <span className="Market__stock__Close__value">
              {formatNumber(
                marketData.candlestick_1limit.close[0]
                  ? marketData.candlestick_1limit.close[0]
                  : 0
              )}
            </span>
          </div>
        </div>
        <div
          className="Market__container__Graph"
          style={{
            "@media screen and (max-width: 1599px)": {
              display: "flex",
            },
            "@media screen and (min-width: 1600px) and (max-width: 1800px)": {
              display: "flex",
            },
            "@media screen and (min-width: 1801px)": {
              display: "flex",
            },
          }}
        >
          {window.innerWidth <= 1599 && (
            <CandleChart data={marketData.candlestick_50limit} height="100%" />
          )}
          {window.innerWidth >= 1600 && window.innerWidth <= 1800 && (
            <CandleChart2 data={marketData.candlestick_50limit} height="100%" />
          )}
          {window.innerWidth >= 1801 && (
            <CandleChart3 data={marketData.candlestick_50limit} height="100%" />
          )}
        </div>

        <div className="Market__container__mid__Footer">
          <div className="Market__container__mid__Footer__width">
            <div className="Market__container__mid__Footer__left">
              <div className="Market__Accont__Dropdawn">
                <div className="Market__Accont">
                  Account
                  <span className="Market__Accont__value">
                    {userAccount.id}
                  </span>
                </div>
              </div>
              <div className="Market__Accont__Credit__limit">
                Credit Limit
                <span className="Market__Accont__Credit__limit__value">
                  {formatNumber(userAccount.credit_limit)}
                </span>
              </div>
              <div className="Market__Accont__Cash__balance">
                Cash Balance
                <span className="Market__Accont__Cash__balance__value">
                  {formatNumber(userAccount.cash_balance)}
                </span>
              </div>
              <div className="Market__Accont__Line_Available">
                Line Available
                <span className="Market__Accont__Line_Available__value">
                  {formatNumber(userAccount.line_available)}
                </span>
              </div>
            </div>

            <div className="Market__container__mid__Footer__mid">
              <div className="Market__Footer__Symbol">
                Symbol
                <span className="Market__Footer__Symbol__value">{symbol}</span>
              </div>
              <div
                className="Market__Footer__Price"
                style={{ borderColor: inputBorderColor1 }}
              >
                Price
                <span className="Market__Footer__Price__value">
                  <NumericFormat
                    value={Price}
                    decimalScale={2}
                    fixedDecimalScale
                    thousandSeparator=","
                    placeholder="THB"
                    onFocus={handleInputFocus1}
                    onBlur={handleInputBlur1}
                    onChange={(e) => setPrice(e.target.value.replace(/,/g, ""))}
                  />
                </span>
              </div>
              <div
                className="Market__Footer__Volume"
                style={{ borderColor: inputBorderColor2 }}
              >
                Volume
                <span className="Market__Footer__Volume__value">
                  <NumericFormat
                    value={Volume}
                    thousandSeparator=","
                    placeholder="Unit"
                    onFocus={handleInputFocus2}
                    onBlur={handleInputBlur2}
                    onChange={(e) => {
                      setVolume(e.target.value.replace(/,/g, ""));
                    }}
                  />
                </span>
              </div>

              <button
                className="Market__Footer__Reset__Order"
                onClick={handleResetClick}
              >
                Reset
              </button>
            </div>
            <div className="Market__container__mid__Footer__right">
              <div className="Market__Footer__Total">
                Total
                <span className="Market__Footer__Total__value">
                  {totalPrice.toLocaleString()}
                </span>
              </div>
              <div
                className="Market__Footer__Pin"
                style={{ borderColor: inputBorderColor3 }}
              >
                Pin
                <span className="Market__Footer__Pin__value">
                  <PatternFormat
                    value={Pin}
                    format="# # # # # #"
                    allowEmptyFormatting
                    mask="_"
                    onFocus={handleInputFocus3}
                    onBlur={handleInputBlur3}
                    onChange={(e) => setPin(e.target.value.replace(/ /g, ""))}
                  />
                </span>
              </div>

              <div className="Market__Footer__Order">
                <div className="Market__Footer__Order__div">
                  <div
                    className={`Market__Footer__Buy ${
                      selectedOption === "Buy" ? "active" : ""
                    }`}
                    onClick={() => handleOptionClick("Buy")}
                  >
                    <button
                      className={selectedOption === "Buy" ? "activeBuy" : ""}
                    >
                      Buy
                    </button>
                  </div>
                  <div
                    className={`Market__Footer__Sell ${
                      selectedOption === "Sell" ? "active" : ""
                    }`}
                    onClick={() => handleOptionClick("Sell")}
                  >
                    <button
                      className={selectedOption === "Sell" ? "activeSell" : ""}
                    >
                      Sell
                    </button>
                  </div>
                </div>
              </div>

              <button
                className="Market__Footer__Place__Order"
                onClick={handleOrderClick}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="Market__container__right">
        <div className="Market__container__right__Container">
          <div className="Market__container__right__div">
            <div className="Market__container__right__Container__Top">
              <div className="Market__container__right__Header__top">
                Popular
              </div>
              <div className="Market__container__right__top__header__container">
                <div className="Market__container__right__top__header__Symbol">
                  Symbol
                </div>
                <div className="Market__container__right__top__header__Price">
                  Last Price
                </div>
                <div className="Market__container__right__top__header__Change">
                  Change
                </div>
              </div>
              <div className="Market__container__right__Container__stock">
                <div className="Market__container__stock__box">
                  <div className="Market__container__stock__div">
                    {userStock.map((stock, index) => (
                      <div
                        key={index}
                        className="Market__container__right__Container__box1"
                        style={{
                          color: stock.change >= 0 ? "#42A93C" : "#CD3D42",
                        }}
                      >
                        <div className="Market__container__right__stock__Symbol">
                          {stock.symbol}
                        </div>
                        <div className="Market__container__right__stock__Price">
                          {stock.close.toFixed(2)}
                        </div>
                        <div className="Market__container__right__stock__Change">
                          {stock.change > 0
                            ? `+${stock.change.toFixed(2)}`
                            : `${stock.change.toFixed(2)}`}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="Market__container__right__Container__Bottom">
              <div className="Market__container__right__Header__bottom">
                Your Order
              </div>
              <div className="Market__container__right__Bottom__header__container">
                <div className="Market__container__right__Bottom__header__Symbol">
                  Symbol
                </div>
                <div className="Market__container__right__Bottom__header__Side">
                  Side
                </div>
                <div className="Market__container__right__Bottom__header__Price">
                  Price
                </div>
                <div className="Market__container__right__Bottom__header__Volume">
                  Volume
                </div>
                <div className="Market__container__right__Bottom__header__Status">
                  Status
                </div>
              </div>
              <div className="Market__container__right__Container__stock">
                <div className="Market__container__stock__box">
                  <div className="Market__container__stock__div">
                    {userOrder.map((stock, index) => (
                      <button
                        onClick={() => togglePopup(stock)}
                        onFocus={handleInputFocus4}
                        onBlur={handleInputBlur4}
                        key={index}
                        className={`Market__container__right__Container__box2 ${
                          selectedStock === stock ? "selected" : ""
                        }`}
                      >
                        <div
                          className="Market__container__right__status__Symbol"
                    
                        >
                          {stock.symbol}
                        </div>
                        <div
                          className="Market__container__right__stock__Side"
                   
                        >
                          {stock.side === "Buy" ? "B" : "S"}
                        </div>
                        <div
                          className="Market__container__right__status__Price"
                   
                        >
                          {stock.price.toFixed(2)}
                        </div>
                        <div
                          className="Market__container__right__status__Volume"
       
                        >
                          {stock.volume}
                        </div>
                        <div
                          className="Market__container__right__status__Status"
                        >
                          {stock.status}
                        </div>
                      </button>
                    ))}

                    <div className="PopUP">
                      {isPopupOpen && (
                        <PopUP
                          pin={Pin}
                          handlePinChange={handlePinChange}
                          selectedStock={selectedStock.symbol}
                          handleCancelOrder={handleCancelOrder}
                          handleOkClick={handleOkClick}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
