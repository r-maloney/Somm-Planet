import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "../AuthFormModal/AuthForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  const demoLogin = () => {
    return dispatch(
      sessionActions.login({ credential: "Demo-lition", password: "password" })
    ).catch((res) => {
      if (res.data && res.data.errors) setErrors(res.data.errors);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='auth__form'>
        <div>
          <img
            className='auth-form__image'
            src='../images/somm-planet-logo-white.png'
            alt='Somm Planet Logo'
          />
          <ul className='auth__errors-list'>
            {errors.map((error, idx) => (
              <li className='auth__error' key={idx}>
                {error}
              </li>
            ))}
          </ul>
          <div className='auth__form-group'>
            <label className='auth__label'>Email or Username</label>
            <input
              className='auth__input'
              type='text'
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </div>
          <div className='auth__form-group'>
            <label className='auth__label'>Password</label>
            <input
              className='auth__input'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='auth-form__button' type='submit'>
            Log In
          </button>
          <button
            className='auth-form__button demo-login__button'
            onClick={demoLogin}
            type='button'
          >
            Login as demo user
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
