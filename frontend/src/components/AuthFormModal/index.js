import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginForm";
import RegistrationForm from "../RegistrationForm";
import "./AuthForm.css";

function AuthFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  return (
    <>
      <button id='nav__auth-button' onClick={() => setShowModal(true)}>
        Sign In
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className='auth__container'>
            <button
              className={
                showLoginForm ? "auth__tab--active" : "auth__tab--inactive"
              }
              onClick={() => setShowLoginForm(true)}
            >
              Log In
            </button>
            <button
              className={
                !showLoginForm ? "auth__tab--active" : "auth__tab--inactive"
              }
              onClick={() => setShowLoginForm(false)}
            >
              Register
            </button>
            {showLoginForm && <LoginForm />}
            {!showLoginForm && <RegistrationForm />}
          </div>
        </Modal>
      )}
    </>
  );
}

export default AuthFormModal;
