import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginFormModal";
import SignupForm from "../SignupForm";

function AuthFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Auth</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/signup'>Sign Up</NavLink>
        </Modal>
      )}
    </>
  );
}

export default AuthFormModal;
