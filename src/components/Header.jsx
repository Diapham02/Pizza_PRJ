// Header.jsx
import React, { useState } from "react";
import Modal from "./Modal"; // Import the Modal component
import HomeForm from "./Form/Home";
import RegisterForm from "./Form/Register";
import SignInForm from "./Form/SignIn";
import ContactForm from "./Form/Contact";
import "../styles/Header.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/images/pizzeria.png" alt="Pizza Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <button onClick={() => openModal(<HomeForm />)}>Home</button>
          </li>
          <li>
            <button onClick={() => openModal(<RegisterForm />)}>
              Register
            </button>
          </li>
          <li>
            <button onClick={() => openModal(<SignInForm />)}>Sign In</button>
          </li>
          <li>
            <button onClick={() => openModal(<ContactForm />)}>Contact</button>
          </li>
        </ul>
      </nav>
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </header>
  );
};

export default Header;
