import React from "react";
import "../Form/ModalForm.css";

import user_icon from "./images/person.png";
import email_icon from "./images/email.png";
import password_icon from "./images/password.png";

const RegisterForm = () => {
  return (
    <div className="container">
      <div className="Reg_header">Register</div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <img src={password_icon} />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="submit-container">
        <button className="Submit-button">Sumbit</button>
      </div>
    </div>
  );
};

export default RegisterForm;
