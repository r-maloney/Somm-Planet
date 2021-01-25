import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <li className='navbar__link'>
          <LoginFormModal />
        </li>
        <li className='navbar__link'>
          <NavLink to='/signup'>Sign Up</NavLink>
        </li>
      </>
    );
  }

  return (
    <nav className='navbar'>
      <div className='navbar__main'></div>
      <div className='navbar__link-home navbar__main'>
        <NavLink exact to='/'>
          <img
            src='../images/somm-planet-logo-blue.png'
            alt='logo'
            className='navbar__logo'
          />
        </NavLink>
      </div>
      <ul className='navbar navbar__linkList navbar__main'>
        <li className='navbar__link'>
          <NavLink exact to='/'>
            Countries
          </NavLink>
        </li>
        <li className='navbar__link'>
          <NavLink exact to='/'>
            Articles
          </NavLink>
        </li>
        {isLoaded && sessionLinks}
      </ul>
    </nav>
  );
}

export default Navigation;
