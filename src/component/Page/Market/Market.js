import React, { useState } from "react";
import "./Market.css";
import { stock_market, User } from "./DBmarket";
import CandleChart from "./CandleChart";

export const Market = () => {
  const symbolData = stock_market.KBANK[0];
  const [selectedOption, setSelectedOption] = useState(null);
  const [Price, setPrice] = useState("");
  const [Volume, setVolume] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleOrderClick = () => {
    console.log("Place order clicked");
  };

  const handleResetClick = () => {
    console.log("Reset order clicked");
  };

  return (
    <div className="Market__container">
      <div className="Market__container__mid">
        <div className="Market__container__mid__header">
          <div className="Market__container__mid__header__left">
            <div className="Market__container__symbol">
              <div className="Market__stock__symbol">Symbol</div>
              <div className="Market__stock__symbol__value">
                {symbolData.symbol}
              </div>
            </div>
            <div className="Market__container__last_Price">
              <div className="Market__stock__Last_Price">last Price</div>
              <div
                className="Market__stock__Last_Price__value"
                style={{
                  color: symbolData.percentChange >= 0 ? "#42A93C" : "#CD3D42",
                }}
              >
                {symbolData.lastPrice.toFixed(2)}
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
                      symbolData.percentChange >= 0 ? "#42A93C" : "#CD3D42",
                  }}
                >
                  {symbolData.percentChange.toFixed(2)}
                </div>
              </div>

              <div className="Market__container__volume">
                <div className="Market__stock__volume">Bid Volume</div>
                <div className="Market__stock__volume__value">
                  {symbolData.volumeBid}
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
                  {symbolData.bid.toFixed(2)}
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
                  {symbolData.offer.toFixed(2)}
                </div>
              </div>

              <div className="Market__container__offer_volume">
                <div className="Market__stock__offer_volume">Offer Volume</div>
                <div className="Market__stock__offer_volume__value">
                  {symbolData.volumeOffer}
                </div>
              </div>

              <div className="Market__container__total_volume">
                <div className="Market__stock__total_volume">Total Volume</div>
                <div className="Market__stock__total_volume__value">
                  {symbolData.totalVolume}
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
              {symbolData.high.toFixed(2)}
            </span>
            <span className="Market__stock__Low">Low</span>
            <span
              className="Market__stock__Low__value"
              style={{
                color: "#CD3D42",
              }}
            >
              {symbolData.low.toFixed(2)}
            </span>
            <span className="Market__stock__Open">Ceiling</span>
            <span
              className="Market__stock__Open__value"
              style={{
                color: "#42A93C",
              }}
            >
              {symbolData.ceiling.toFixed(2)}
            </span>
            <span className="Market__stock__floor">Floor</span>
            <span
              className="Market__stock__floor__value"
              style={{
                color: "#CD3D42",
              }}
            >
              {symbolData.floor.toFixed(2)}
            </span>
            <sapn className="Market__stock__Average">Average</sapn>
            <span className="Market__stock__Average__value">
              {symbolData.average.toFixed(2)}
            </span>
            <sapn className="Market__stock__Close">Close</sapn>
            <span className="Market__stock__Close__value">
              {symbolData.close.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="Market__container__Graph">
          <CandleChart data={stock_market.candleData} height="100%" />
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
              <div className="Market__Footer__Price">Price
              <span className="Market__Footer__Price__value">
              <input
                type="text"
                placeholder="THB"
                onChange={(e) => setPrice(e.target.value)}
              />
                </span>
              </div>
              <div className="Market__Footer__Volume">Volume</div>
              <span className="Market__Footer__Volume__value">
                <input

                  type="text"
                  placeholder="Volume"
                  onChange={(e) => setVolume(e.target.value)}
                />
                </span>
              <div className="Market__Footer__Reset__Order">
              <button onClick={handleResetClick}>Place Order</button>
              </div>
            </div>
            <div className="Market__container__mid__Footer__right">
              <div className="Market__Footer__Total">Total</div>
              <div className="Market__Footer__Pin">Pin</div>

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
                      className={
                        selectedOption === "sell" ? "activeSell" : ""
                      }
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
