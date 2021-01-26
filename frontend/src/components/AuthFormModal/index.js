import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";

function AuthFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Auth</button>
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
