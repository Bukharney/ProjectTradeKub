import React, { useState, useEffect } from "react";
import './EditUser.css';
import { Username } from "./UserDB.js";
import EdituserBG from "./EdituserBG.svg";

export const EditUser = () => {

    const user = Username.username[0];

    const [inputBorderColor1, setInputBorderColor1] = useState("");
    const [inputBorderColor2, setInputBorderColor2] = useState("");
    const [inputBorderColor3, setInputBorderColor3] = useState("");
    const [inputBorderColor4, setInputBorderColor4] = useState("");
  
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

  return (
    <div className='AllsectionEditUser'>
        <div className='boxEditUser'>
            <div className='Head-Text-EditUser'>Edit User Profile</div>
            <div className='TextUsernameEditUser'>UsernameFromLogin</div>
            <div className='TextBoxInsertEditUser1' style={{ borderColor: inputBorderColor1 }}> 
                <input
                type="text"
                placeholder={user.email}
                onFocus={handleInputFocus1}
                onBlur={handleInputBlur1}
                />
            </div>
            <div className='TextBoxInsertEditUser2' style={{ borderColor: inputBorderColor2 }}> 
                <input
                type="text"
                placeholder={user.phonenumber}
                onFocus={handleInputFocus2}
                onBlur={handleInputBlur2}
                />
            </div>
            <div className='TextBoxInsertEditUser3'style={{ borderColor: inputBorderColor3 }}> 
                <input
                type="text"
                placeholder={user.username}
                onFocus={handleInputFocus3}
                onBlur={handleInputBlur3}
                />
            </div>
            <div className='TextBoxInsertEditUser4'style={{ borderColor: inputBorderColor4 }}> 
                <input
                type="text"
                placeholder={user.password}
                onFocus={handleInputFocus4}
                onBlur={handleInputBlur4}
                />
            </div>


            <div className='CancelConfirm-Edit'>
                <button className='EditCancel'>Cancel</button>
                <button className='EditConfirm'>Confirm</button>
            </div>
            <div className='CancelConfirm-Edit'>
                <button className='EditDeleteAcc'>Delete an User</button>
            </div>
                
        </div>
        <div className="creditcardSSSS" >
        <img src={EdituserBG}/>
      </div>
    </div>


 
    )
}

export default EditUser