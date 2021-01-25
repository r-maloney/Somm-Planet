import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

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

  return (
    <>
      <Link to='/login' className='login-signup__tab--active'>
        Log In
      </Link>
      <Link to='/signup' className='login-signup__tab--inactive'>
        Sign Up
      </Link>
      <form onSubmit={handleSubmit}>
        <div className='login__form'>
          <ul className='login__errors-list'>
            {errors.map((error, idx) => (
              <li className='login__error' key={idx}>
                {error}
              </li>
            ))}
          </ul>
          <div className='login__form-group'>
            <label className='login__label'>
              Login
              <input
                className='login__input'
                type='text'
                value={credential}
                placeholder='Email or Username'
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </label>
          </div>
          <div className='login__form-group'>
            <label className='login__label'>
              Password
              <input
                placeholder='Password'
                className='login__input'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button className='login__button' type='submit'>
            Log In
          </button>
          {/* <a href="/demo?_csrf=csrf" id="auth-splash__form-demo">Login as demo user</a>  */}
        </div>
      </form>
    </>
  );
}

export default LoginForm;
