import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
import "../LoginForm/LoginForm.css";

function AuthFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  return (
    <>
      <button id='auth-form__button' onClick={() => setShowModal(true)}>
        Sign In
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <button onClick={() => setShowLoginForm(true)}>Log In</button>
          <button onClick={() => setShowLoginForm(false)}>Register</button>
          {showLoginForm && <LoginForm />}
          {!showLoginForm && <SignupForm />}
        </Modal>
      )}
    </>
  );
}

export default AuthFormModal;
