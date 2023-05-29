import React, { useState, useEffect, useContext } from "react";
import "./EditUser.css";
import { Username } from "./UserDB.js";
import EdituserBG from "./EdituserBG.svg";
import axios from "axios";
import TokenContext from "../../../Context/TokenContext";
import Logo from "./Logo.svg";

export const EditUser = () => {
  const Token = useContext(TokenContext);
  const [userData, setUserData] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

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

  const handleClick = async () => {
    const data = {
      name: name,
      phone: phone,
      email: email,
      password: password,
    };

    await axios
      .put("https://www.tradekub.me/users/update", data, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response);
        alert("Edit Success");
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
          setEmail(response.data.email);
          setPhone(response.data.phone);
          setName(response.data.name);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    get_user_info();
  }, []);

  const handleClicklink = () => {
    window.location.href = "/SelectAccount";}

  return (
    <div className="AllsectionEditUser">
      <div className="boxEditUser">
        <div className="Head-Text-EditUser">Edit User Profile</div>
        <div className="Slect__Logo">
            <img src={Logo} alt="Logo" />
          </div>
        <div
          className="TextBoxInsertEditUser1"
          style={{ borderColor: inputBorderColor1 }}
        >
          <input
            type="text"
            value={email}
            placeholder={userData.email}
            onFocus={handleInputFocus1}
            onBlur={handleInputBlur1}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div
          className="TextBoxInsertEditUser2"
          style={{ borderColor: inputBorderColor2 }}
        >
          <input
            type="text"
            value={phone}
            placeholder={userData.phone}
            onFocus={handleInputFocus2}
            onBlur={handleInputBlur2}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div
          className="TextBoxInsertEditUser3"
          style={{ borderColor: inputBorderColor3 }}
        >
          <input
            type="text"
            value={name}
            placeholder={userData.name}
            onFocus={handleInputFocus3}
            onBlur={handleInputBlur3}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div
          className="TextBoxInsertEditUser4"
          style={{ borderColor: inputBorderColor4 }}
        >
          <input
            type="text"
            placeholder="Password"
            onFocus={handleInputFocus4}
            onBlur={handleInputBlur4}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="CancelConfirm-Edit">
          <button className="EditCancel"onClick={handleClicklink}>Cancel</button>
          <button className="EditConfirm" onClick={handleClick}>
            Confirm
          </button>
        </div>
        <div className="CancelConfirm-Edit">
          <button className="EditDeleteAcc">Delete an User</button>
        </div>
      </div>
      <div className="creditcardSSSS">
        <img src={EdituserBG} />
      </div>
    </div>
  );
};

export default EditUser;
