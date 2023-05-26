import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Notification.css";
import "boxicons/css/boxicons.min.css";
import TokenContext from "../../../Context/TokenContext";
import axios from "axios";
import AccountContext from "../../../Context/AccountContext";

export const Notification = ({ value, hasRefresh }) => {
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);
  const Token = useContext(TokenContext);
  const Account = useContext(AccountContext);

  const get_time = (dateString) => {
    const notificationTime = new Date(dateString);
    const currentTime = new Date();
    const timeDifference = currentTime - notificationTime;

    if (timeDifference > 0) {
      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      if (hours === 0) {
        return `${minutes} minutes ago`;
      }
      return `${hours} hours ${minutes} minutes ago`;
    }
  };

  const del_noti = async (e) => {
    await axios
      .get(`https://www.tradekub.me/noti/delete/${e}`, {
        headers: {
          accept: "*/*",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setClick(!click);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const get_noti = async (e) => {
    await axios
      .get(`https://www.tradekub.me/noti/${e}`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error.response.data);
        setData([]);
        return;
      });
  };

  useEffect(() => {
    get_noti(Account.account);
  }, [Account.account, click]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      get_noti(Account.account);
    }, 1000 * 10);
    return () => clearInterval(intervalId);
  }, []);

  const handleClick1 = () => {
    value["key"] = 1;
    hasRefresh["rkey"] = 1;
    localStorage.setItem("key", JSON.stringify(value));
    setClick(!click);
  };

  if (value["key"] !== 3) {
    return null;
  } else if (data.length === 0) {
    return (
      <div className="Notification">
        <div className="Nofitication__Container">
          <div className="Notication__Box">
            <div className="Nofitication__Header">Notification</div>
            <div className="TextNonoti">No Notifications Yet!</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="Notification">
      <div className="Nofitication__Container">
        <div className="Notication__Box">
          <div className="Nofitication__Header">Notification</div>
          {data.map((Inbox, index) => {
            return (
              <div className="Notification_Item" key={index}>
                <Link to="/Wallet">
                  <button
                    onClick={() => {
                      handleClick1(index);
                    }}
                  >
                    <div className="Notification__Body">
                      <div className="Notification_Dot"></div>
                      <div className="NotiText">
                        <div className="NotiPrice">{Inbox.volume}</div>
                        <div className="NotiName">{Inbox.message}</div>
                        <div className="NotiTime">
                          {get_time(Inbox.created_at)}
                        </div>
                      </div>
                    </div>
                  </button>
                </Link>

                <button
                  className="DeleteButton"
                  onClick={() => {
                    del_noti(Inbox.id);
                  }}
                >
                  -
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notification;
