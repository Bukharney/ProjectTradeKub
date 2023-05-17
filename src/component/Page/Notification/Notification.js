import React, { useState } from "react";
import { NotificationInbox } from "./DBNotification.js";
import { Link } from "react-router-dom";

import "./Notification.css";
export const Notification = ({ A }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  if (A !== 3) {
    return null;
  }

  if (NotificationInbox.length === 0) {
    return <div>No notification</div>;
  }

  return (
    <div className="Notification">
      <div className="Nofitication__Container">
        <div className="Notication__Box">
          <div className="Nofitication__Header">Notification</div>

          {NotificationInbox.map((Inbox, index) => (
            <div className="Notification_Item" key={index}>
              <div className="Notification__Button">
                <Link to="/Wallet">
                  <button onClick={handleClick}>
                    <div className="Notification__Body">
                      <div className="Notification_Dot"></div>
                      <div className="NotiText">
                        <div className="NotiPrice">
                          {Inbox[`NotiPrice${index + 1}`]}
                        </div>
                        <div className="NotiName">
                          {Inbox[`NotiName${index + 1}`]}
                        </div>
                        <div className="NotiTime">
                          {Inbox[`NotiTime${index + 1}`]}
                        </div>
                      </div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
