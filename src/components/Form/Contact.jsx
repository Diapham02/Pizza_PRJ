import React from "react";
import "../Form/ModalForm.css";
const ContactForm = () => {
  return (
    <form className="login-form" action="/submit-login" method="POST">
      <h2>Contact Us</h2>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Message:
        <textarea name="message" required></textarea>
      </label>
      <button className="formbtn" type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
