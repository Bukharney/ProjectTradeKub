import React, { useState } from "react";
import "./AnalyticPage.css";
import Logo from "./Logo.svg";
import axios from "axios";
import TableMapping from "./TableMap";

let index = 0;

export const AnalyticPage = () => {
  const [click, setClick] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [data, setData] = useState([]);
  const handleClick = (i) => {
    console.log("i", i);
    index = i;
    setClick(!click);
  };

  const get_vol_sum_stock = async (startDate, endDate) => {
    await axios
      .get(
        `https://www.tradekub.me/analytics/most_vol_stock/${startDate}/${endDate}`,
        {
          headers: {
            accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const get_most_new_acc = async (startDate, endDate) => {
    await axios
      .get(
        `https://www.tradekub.me/analytics/most_new_contract_broker/${startDate}/${endDate}`,
        {
          headers: {
            accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const get_most_cancel = async (startDate, endDate) => {
    await axios
      .get(
        `https://www.tradekub.me/analytics/most_cancel_ratio/${startDate}/${endDate}`,
        {
          headers: {
            accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const get_most_value = async (startDate, endDate) => {
    await axios
      .get(
        `https://www.tradekub.me/analytics/most_closed_value/${startDate}/${endDate}`,
        {
          headers: {
            accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleDateRangeSubmit = () => {
    console.log("startDate", startDate);
    console.log("endDate", endDate);
    console.log("startTime", startTime);
    console.log("endTime", endTime);
    if (index === 1) {
      get_vol_sum_stock(startDate + " " + startTime, endDate + " " + endTime);
    }
    if (index === 2) {
      get_most_new_acc(startDate + " " + startTime, endDate + " " + endTime);
    }
    if (index === 3) {
      get_most_value(startDate + " " + startTime, endDate + " " + endTime);
    }
    if (index === 4) {
      get_most_cancel(startDate + " " + startTime, endDate + " " + endTime);
    }
  };

  const [inputBorderColor1, setInputBorderColor1] = useState("");
  const [inputBorderColor2, setInputBorderColor2] = useState("");
  const [inputBorderColor3, setInputBorderColor3] = useState("");
  const [inputBorderColor4, setInputBorderColor4] = useState("");
  const [inputBorderColor5, setInputBorderColor5] = useState("");
  const [inputBorderColor6, setInputBorderColor6] = useState("");
  const [inputBorderColor7, setInputBorderColor7] = useState("");
  const [inputBorderColor8, setInputBorderColor8] = useState("");
  const [inputBorderColor9, setInputBorderColor9] = useState("");
  const [inputBorderColor10, setInputBorderColor10] = useState("");
  const [inputBorderColor11, setInputBorderColor11] = useState("");
  const [inputBorderColor12, setInputBorderColor12] = useState("");

  const handleInputFocus1 = () => {
    setInputBorderColor1("#CCFF00");
    setInputBorderColor5("#282A2E");
  };

  const handleInputBlur1 = () => {
    setInputBorderColor1("");
    setInputBorderColor5("");
  };

  const handleInputFocus2 = () => {
    setInputBorderColor2("#CCFF00");
    setInputBorderColor6("#282A2E");
  };

  const handleInputBlur2 = () => {
    setInputBorderColor2("");
    setInputBorderColor6("");
  };

  const handleInputFocus3 = () => {
    setInputBorderColor3("#CCFF00");
    setInputBorderColor7("#282A2E");
  };

  const handleInputBlur3 = () => {
    setInputBorderColor3("");
    setInputBorderColor7("");
  };

  const handleInputFocus4 = () => {
    setInputBorderColor4("#CCFF00");
    setInputBorderColor8("#282A2E");
  };

  const handleInputBlur4 = () => {
    setInputBorderColor4("");
    setInputBorderColor8("");
  };

  const handleInputFocus9 = () => {
    setInputBorderColor9("#CCFF00");
  };

  const handleInputBlur9 = () => {
    setInputBorderColor9("");
  };

  const handleInputFocus10 = () => {
    setInputBorderColor10("#CCFF00");
  };

  const handleInputBlur10 = () => {
    setInputBorderColor10("");
  };

  const handleInputFocus11 = () => {
    setInputBorderColor11("#CCFF00");
  };

  const handleInputBlur11 = () => {
    setInputBorderColor11("");
  };

  const handleInputFocus12 = () => {
    setInputBorderColor12("#CCFF00");
  };

  const handleInputBlur12 = () => {
    setInputBorderColor12("");
  };

  return (
    <div>
      <div className="GovernmentView__container">
        <div className="GovernmentView__data__container">
          <div className="GovernmentView__Header__container">
            <img src={Logo} alt="logo" className="GovernmentView__logo" />
            <div className="GovermentView__title">Analytics Report</div>
          </div>
          <div className="Analytics__data__container__table">
            <button
              className="Analytic__container__button"
              style={{
                backgroundColor: inputBorderColor1,
                color: inputBorderColor5,
              }}
              onClick={() => handleClick(1)}
              onFocus={handleInputFocus1}
              onBlur={handleInputBlur1}
            >
              Most Volume Sum <br /> by Company
            </button>

            <button
              className="Analytic__container__button"
              style={{
                backgroundColor: inputBorderColor2,
                color: inputBorderColor6,
              }}
              onClick={() => handleClick(2)}
              onFocus={handleInputFocus2}
              onBlur={handleInputBlur2}
            >
              Most new Contract <br /> by Broker Company
            </button>

            <button
              className="Analytic__container__button"
              style={{
                backgroundColor: inputBorderColor3,
                color: inputBorderColor7,
              }}
              onFocus={handleInputFocus3}
              onBlur={handleInputBlur3}
              onClick={() => handleClick(3)}
            >
              Most closed stock value <br /> by date
            </button>

            <button
              className="Analytic__container__button"
              style={{
                backgroundColor: inputBorderColor4,
                color: inputBorderColor8,
              }}
              onFocus={handleInputFocus4}
              onBlur={handleInputBlur4}
              onClick={() => handleClick(4)}
            >
              Most Cancel Ratio <br /> by date
            </button>
          </div>

          <div className="Analytic__date__container">
            <div
              className="Analytic__date__input"
              style={{
                borderColor: inputBorderColor9,
              }}
            >
              <input
                type="text"
                onFocus={handleInputFocus9}
                onBlur={handleInputBlur9}
                className="Analytic__date__input"
                placeholder="Start Time (hh:mm)"
                value={startTime}
                onChange={handleStartTimeChange}
              />
            </div>
            <div
              className="Analytic__date__input"
              style={{
                borderColor: inputBorderColor10,
              }}
            >
              <input
                type="text"
                onFocus={handleInputFocus10}
                onBlur={handleInputBlur10}
                className="Analytic__date__input"
                placeholder="Start Date (yyyy-mm-dd)"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <div className="Analytic__date__TO"> To </div>
            <div
              className="Analytic__date__input"
              style={{
                borderColor: inputBorderColor11,
              }}
            >
              <input
                type="text"
                onFocus={handleInputFocus11}
                onBlur={handleInputBlur11}
                className="Analytic__date__input"
                placeholder="End Time (hh:mm)"
                value={endTime}
                onChange={handleEndTimeChange}
              />
            </div>
            <div
              className="Analytic__date__input"
              style={{
                borderColor: inputBorderColor12,
              }}
            >
              <input
                type="text"
                onFocus={handleInputFocus12}
                onBlur={handleInputBlur12}
                className="Analytic__date__input"
                placeholder="End Date (yyyy-mm-dd)"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>

            <button
              className="Analytic__date__button"
              onClick={handleDateRangeSubmit}
            >
              Apply
            </button>
          </div>

          <div className="Analytic__data_______container">
            <div className="Analytic__data__table__container__size">
              {index === 1 && <TableMapping data={data} />}
              {index === 2 && <TableMapping data={data} />}
              {index === 3 && <TableMapping data={data} />}
              {index === 4 && <TableMapping data={data} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticPage;
