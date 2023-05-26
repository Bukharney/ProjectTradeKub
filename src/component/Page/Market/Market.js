import React, { useEffect, useState, useContext } from "react";
import "./Market.css";
import { stock_market, User } from "./DBmarket";
import CandleChart from "./CandleChart";
import axios from "axios";
import TokenContext from "../../../Context/TokenContext";
import AccountContext from "../../../Context/AccountContext";

export const Market = () => {
  const Token = useContext(TokenContext);
  const Account = useContext(AccountContext);
  const symbolData = stock_market.KBANK[0];
  const [isLoading, setIsloading] = useState(true);
  const [symbol, setSymbol] = useState("KBANK");
  const [marketData, setMarketData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [Price, setPrice] = useState("");
  const [Volume, setVolume] = useState("");
  const [Pin, setPin] = useState("");
  const [inputBorderColor1, setInputBorderColor1] = useState("");
  const [inputBorderColor2, setInputBorderColor2] = useState("");
  const [inputBorderColor3, setInputBorderColor3] = useState("");

  const totalPrice = Price * Volume;

  const formatNumber = (Number) => {
    return Number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleOrderClick = () => {
    console.log("Place order clicked");
  };

  const handleResetClick = () => {
    console.log("Reset order clicked");
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

  const get_market_data = async (symbol) => {
    await axios
      .get(`http://127.0.0.1:8000/stock/market_data/${symbol}`, {
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

  useEffect(() => {
    get_market_data(symbol);
  }, []);

  if (isLoading) {
    return <div className="Market__container">Loading...</div>;
  }

  return (
    <div className="Market__container">
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
                {formatNumber(marketData.quote_symbol.last)}
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
                  {formatNumber(marketData.quote_symbol.percentChange)}
                </div>
              </div>
              <div className="Market__container__volume">
                <div className="Market__stock__volume">Bid Volume</div>
                <div className="Market__stock__volume__value">
                  {formatNumber(Number(marketData.bid_offer.bid_volume1))}
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
                  {formatNumber(marketData.bid_offer.bid_price1)}
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
                  {formatNumber(marketData.bid_offer.ask_price1)}
                </div>
              </div>
              <div className="Market__container__offer_volume">
                <div className="Market__stock__offer_volume">Offer Volume</div>
                <div className="Market__stock__offer_volume__value">
                  {formatNumber(Number(marketData.bid_offer.ask_volume1))}
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
              {formatNumber(marketData.quote_symbol.high)}
            </span>
            <span className="Market__stock__Low">Low</span>
            <span
              className="Market__stock__Low__value"
              style={{
                color: "#CD3D42",
              }}
            >
              {formatNumber(marketData.quote_symbol.low)}
            </span>
            <span className="Market__stock__Open">Ceiling</span>
            <span
              className="Market__stock__Open__value"
              style={{
                color: "#42A93C",
              }}
            >
              {formatNumber(marketData.candlestick_1limit.open[0] * 1.3)}
            </span>
            <span className="Market__stock__floor">Floor</span>
            <span
              className="Market__stock__floor__value"
              style={{
                color: "#CD3D42",
              }}
            >
              {formatNumber(marketData.candlestick_1limit.open[0] * 0.7)}
            </span>
            <sapn className="Market__stock__Average">Average</sapn>
            <span className="Market__stock__Average__value">
              {formatNumber(marketData.quote_symbol.average)}
            </span>
            <sapn className="Market__stock__Close">Close</sapn>
            <span className="Market__stock__Close__value">
              {formatNumber(marketData.candlestick_1limit.close[0])}
            </span>
          </div>
        </div>
        <div className="Market__container__Graph">
          <CandleChart data={marketData.candlestick_50limit} height="100%" />
        </div>
        <div className="Market__container__mid__Footer">
          <div className="Market__container__mid__Footer__width">
            <div className="Market__container__mid__Footer__left">
              <div className="Market__Accont__Dropdawn">
                <div className="Market__Accont">
                  Account
                  <span className="Market__Accont__value">
                    {User.Acount[0].Acount}
                  </span>
                </div>
              </div>
              <div className="Market__Accont__Credit__limit">
                Credit Limit
                <span className="Market__Accont__Credit__limit__value">
                  {User.Acount[0].Credit_limit.toFixed(2)}
                </span>
              </div>
              <div className="Market__Accont__Cash__balance">
                Cash Balance
                <span className="Market__Accont__Cash__balance__value">
                  {User.Acount[0].Cash_balance.toFixed(2)}
                </span>
              </div>
              <div className="Market__Accont__Line_Available">
                Line Available
                <span className="Market__Accont__Line_Available__value">
                  {User.Acount[0].Line_Available.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="Market__container__mid__Footer__mid">
              <div className="Market__Footer__Symbol">
                Symbol
                <span className="Market__Footer__Symbol__value">
                  {symbolData.symbol}
                </span>
              </div>
              <div
                className="Market__Footer__Price"
                style={{ borderColor: inputBorderColor1 }}
              >
                Price
                <span className="Market__Footer__Price__value">
                  <input
                    type="text"
                    placeholder="THB"
                    onFocus={handleInputFocus1}
                    onBlur={handleInputBlur1}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </span>
              </div>
              <div
                className="Market__Footer__Volume"
                style={{ borderColor: inputBorderColor2 }}
              >
                Volume
                <span className="Market__Footer__Volume__value">
                  <input
                    type="text"
                    placeholder="Ex. 100"
                    onFocus={handleInputFocus2}
                    onBlur={handleInputBlur2}
                    onChange={(e) => setVolume(e.target.value)}
                  />
                </span>
              </div>

              <div className="Market__Footer__Reset__Order">
                <button onClick={handleResetClick}>Place Order</button>
              </div>
            </div>
            <div className="Market__container__mid__Footer__right">
              <div className="Market__Footer__Total">
                Total
                <span className="Market__Footer__Total__value">
                  {totalPrice.toFixed(2)}
                </span>
              </div>
              <div
                className="Market__Footer__Pin"
                style={{ borderColor: inputBorderColor3 }}
              >
                Pin
                <span className="Market__Footer__Pin__value">
                  <input
                    type="text"
                    placeholder="Ex. 1234"
                    onFocus={handleInputFocus3}
                    onBlur={handleInputBlur3}
                    onChange={(e) => setPin(e.target.value)}
                  />
                </span>
              </div>

              <div className="Market__Footer__Order">
                <div className="Market__Footer__Order__div">
                  <div
                    className={`Market__Footer__Buy ${
                      selectedOption === "buy" ? "active" : ""
                    }`}
                    onClick={() => handleOptionClick("buy")}
                  >
                    <button
                      className={selectedOption === "buy" ? "activeBuy" : ""}
                    >
                      Buy
                    </button>
                  </div>
                  <div
                    className={`Market__Footer__Sell ${
                      selectedOption === "sell" ? "active" : ""
                    }`}
                    onClick={() => handleOptionClick("sell")}
                  >
                    <button
                      className={selectedOption === "sell" ? "activeSell" : ""}
                    >
                      Sell
                    </button>
                  </div>
                </div>
              </div>
              <div className="Market__Footer__Place__Order">
                <button onClick={handleOrderClick}>Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Market__container__right"></div>
      <div className="Market__container__left"></div>
    </div>
  );
};
