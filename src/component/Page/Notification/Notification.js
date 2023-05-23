import React, { useState } from "react";
import { NotificationInbox } from "./DBNotification.js";
import { Link } from "react-router-dom";
import "./Notification.css";

import { value } from "../Navbar/Navbar.js";

export const Notification = () => {
  const [click, setClick] = useState(false);
  const [deletedNotifications, setDeletedNotifications] = useState([]);

  if (value.key !== 3) {
    return null;
  }

  const handleClick2 = (index) => {
    if (deletedNotifications.includes(index)) {
      setDeletedNotifications((prevState) =>
        prevState.filter((item) => item !== index)
      );
    } else {
      setDeletedNotifications((prevState) => [...prevState, index]);
    }
  };

  const handleClick1 = () => {
    value.key = 1;
    setClick(!click);
  };

  if (NotificationInbox.result.length === 0) {
    return (
      <div className="Notification">
        <div className="Nofitication__Container">
          <div className="Notication__Box">
            <div className="Nofitication__Header">Notification</div>
            <div className="TextNonoti">No Notifications Yet</div>
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
          {NotificationInbox.result.map((Inbox, index) => {
            if (deletedNotifications.includes(index)) {
              return null;
            }

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
                        <div className="NotiPrice">{Inbox.NotiPrice}</div>
                        <div className="NotiName">{Inbox.NotiName}</div>
                        <div className="NotiTime">{Inbox.NotiTime}</div>
                      </div>
                    </div>
                  </button>
                </Link>

                <button
                  className="DeleteButton"
                  onClick={() => {
                    handleClick2(index);
                  }}
                >
                  {deletedNotifications.includes(index) ? "Undo" : "-"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
