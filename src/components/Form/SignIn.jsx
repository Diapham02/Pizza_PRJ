import React from "react";
import "../Form/ModalForm.css";

import user_icon from "./images/person.png";
import email_icon from "./images/email.png";
import password_icon from "./images/password.png";

const SignInForm = () => {
  return (
    <div className="container">
      <div className="SignIn_header">Sign In</div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <img src={password_icon} />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        Forgot Password? <span>Click Here!</span>
      </div>
      <div className="submit-container">
        <button className="Login-button">Login</button>
      </div>
    </div>
  );
};

export default SignInForm;
