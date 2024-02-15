import React, { useState, useEffect } from "react";
import "./Register.css";
import s1 from "./imgStone/stone 1.svg";
import s2 from "./imgStone/stone 2.svg";
import s3 from "./imgStone/stone 3.svg";
import s4 from "./imgStone/stone 4.svg";
import s5 from "./imgStone/stone 5.svg";
import s6 from "./imgStone/stone 6.svg";
import s7 from "./imgStone/stone 7.svg";
import s8 from "./imgStone/stone 8.svg";
import s9 from "./imgStone/stone 9.svg";
import s10 from "./imgStone/stone 10.svg";
import creditcard from "./imgStone/Credit cards.svg";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

const Register = () => {
  const [inputBorderColor1, setInputBorderColor1] = useState("");
  const [inputBorderColor2, setInputBorderColor2] = useState("");
  const [inputBorderColor3, setInputBorderColor3] = useState("");
  const [inputBorderColor4, setInputBorderColor4] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [stoneOffset, setStoneOffset] = useState({ offsetX: 0, offsetY: 0 });

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

  const handleBack = () => {
    window.location.href = "/Login";
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const offsetX = clientX / window.innerWidth - 0.5;
    const offsetY = clientY / window.innerHeight - 0.5;
    setStoneOffset({ offsetX, offsetY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const post_regsiter = async (e) => {
    const data = {
      name: username,
      phone: phone,
      email: email,
      password: password,
    };
    await axios
      .post("/users/", data, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        alert("Register Success");
        window.location.href = "/Login";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = () => {
    post_regsiter();
  };

  return (
    <div className="AllsectionRegis">
      <div className="boxRegis_">
        <div className="Regis__Head-Text">
          Create new <br />
          TradeKub account
        </div>
        <div
          className="TextBoxInsert1"
          style={{ borderColor: inputBorderColor1 }}
        >
          <input
            value={email}
            type="text"
            placeholder="E-mail"
            onFocus={handleInputFocus1}
            onBlur={handleInputBlur1}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div
          className="TextBoxInsert2"
          style={{ borderColor: inputBorderColor2 }}
        >
          <input
            value={phone}
            type="text"
            placeholder="Phone Number"
            onFocus={handleInputFocus2}
            onBlur={handleInputBlur2}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div
          className="TextBoxInsert3"
          style={{ borderColor: inputBorderColor3 }}
        >
          <input
            value={username}
            type="text"
            placeholder="Username"
            onFocus={handleInputFocus3}
            onBlur={handleInputBlur3}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div
          className="TextBoxInsert4"
          style={{ borderColor: inputBorderColor4 }}
        >
          <input
            value={password}
            type="text"
            placeholder="Password"
            onFocus={handleInputFocus4}
            onBlur={handleInputBlur4}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="CancelConfirm">
          <button className="RegisCancel" onClick={handleBack}>
            Cancel
          </button>
          <button className="RegisConfirm" onClick={handleSubmit}>
            Confirm
          </button>
        </div>
      </div>

      <div
        className="stone1"
        style={{
          pointerEvents: "none",
          transform: `translate(${stoneOffset.offsetX * 60}px, ${
            stoneOffset.offsetY * 60
          }px)`,
        }}
      >
        <img src={s1} alt="Stone" className="stone-image" />
      </div>
      <div
        className="stone2"
        style={{
          transform: `translate(${stoneOffset.offsetX * 30}px, ${
            stoneOffset.offsetY * 30
          }px)`,
        }}
      >
        <img src={s2} alt="Stone" className="stone-image" />
      </div>
      <div
        className="stone3"
        style={{
          transform: `translate(${stoneOffset.offsetX * 20}px, ${
            stoneOffset.offsetY * 20
          }px)`,
        }}
      >
        <img src={s3} alt="Stone" className="stone-image" />
      </div>
      <div
        className="stone4"
        style={{
          transform: `translate(${stoneOffset.offsetX * 15}px, ${
            stoneOffset.offsetY * 15
          }px)`,
        }}
      >
        <img src={s4} alt="Stone" className="stone-image" />
      </div>
      <div
        className="stone5"
        style={{
          transform: `translate(${stoneOffset.offsetX * 15}px, ${
            stoneOffset.offsetY * 15
          }px)`,
        }}
      >
        <img src={s5} alt="Stone" className="stone-image" />
      </div>
      <div
        className="stone6"
        style={{
          transform: `translate(${stoneOffset.offsetX * 10}px, ${
            stoneOffset.offsetY * 10
          }px)`,
        }}
      >
        <img src={s6} alt="Stone" className="stone-image" />
      </div>
      <div
        className="stone7"
        style={{
          transform: `translate(${stoneOffset.offsetX * 15}px, ${
            stoneOffset.offsetY * 15
          }px)`,
        }}
      >
        <img src={s7} alt="Stone" className="stone-image" />
      </div>
      <div
        className="stone8"
        style={{
          transform: `translate(${stoneOffset.offsetX * 10}px, ${
            stoneOffset.offsetY * 10
          }px)`,
        }}
      >
        <img src={s8} alt="Stone" className="stone-image" />
      </div>
      <div
        className="stone9"
        style={{
          transform: `translate(${stoneOffset.offsetX * 15}px, ${
            stoneOffset.offsetY * 15
          }px)`,
        }}
      >
        <img src={s9} alt="Stone" className="stone-image" />
      </div>
      <div
        className="stone10"
        style={{
          transform: `translate(${stoneOffset.offsetX * 10}px, ${
            stoneOffset.offsetY * 10
          }px)`,
        }}
      >
        <img src={s10} alt="Stone" className="stone-image" />
      </div>
      <div className="creditcardS">
        <img src={creditcard} className="Reis___backgroun" alt="rbg" />
      </div>
    </div>
  );
};

export default Register;
