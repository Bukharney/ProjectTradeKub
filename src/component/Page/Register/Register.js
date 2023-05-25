import React, { useState } from "react";
import "./Register.css";


export const Register = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
    setIndex(i);
  };
  return (
    <div className="Allsection">
        <div>
            Hello
        </div>
    </div>
  );
};

export default Register;
