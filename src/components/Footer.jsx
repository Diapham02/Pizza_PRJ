// Footer.jsx
import React from "react";
import "../styles/Footer.css";

const BacktoTop = () => {
  window.scrollTo(0, 0);
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>Le Trung Nghia</p>
      <button onClick={BacktoTop}>Back to top</button>
    </footer>
  );
};

export default Footer;
