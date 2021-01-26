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
    <div className='login__container'>
      <Link to='/login' className='login-signup__tab--active'>
        Log In
      </Link>
      <Link to='/signup' className='login-signup__tab--inactive'>
        Sign Up
      </Link>
      <form onSubmit={handleSubmit} className='login__form'>
        <div>
          <ul className='login__errors-list'>
            {errors.map((error, idx) => (
              <li className='login__error' key={idx}>
                {error}
              </li>
            ))}
          </ul>
          <div className='login__form-group'>
            <label className='login__label'>Email or Username</label>
            <input
              className='login__input'
              type='text'
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </div>
          <div className='login__form-group'>
            <label className='login__label'>Password</label>
            <input
              className='login__input'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='login__button' type='submit'>
            Log In
          </button>
          {/* <a href="/demo?_csrf=csrf" id="auth-splash__form-demo">Login as demo user</a>  */}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
