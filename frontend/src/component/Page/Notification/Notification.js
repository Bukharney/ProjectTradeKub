import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./Noti.css";
 export const Notification = ({A}) => {
  if(A !=3){ return null;}
   return (
    <div className = 'Noti'>
        <h1>Notification</h1>
     </div>
  );
};

 