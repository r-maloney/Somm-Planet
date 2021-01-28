import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import ProfileButton from "./ProfileButton";
import AuthFormModal from "../AuthFormModal";
import MenuButton from "./MenuButton";
import { getCountries } from "../../store/country";

import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <AuthFormModal />
      </>
    );
  }

  const countries = useSelector((state) => Object.values(state.country));
  const options = [];

  countries.forEach((country) => {
    options.push({ value: country.name, label: country.name });
  });

  const randomImg = () => {
    const randNum = Math.floor(Math.random() * 4);
    return `url(${process.env.PUBLIC_URL}/images/background-image-${randNum}.jpg)`;
  };
  const style = {
    backgroundImage: `${randomImg()}`,
  };

  return (
    <nav>
      <div className='navbar' style={style}>
        <div className='navbar__main'></div>
        <div className='navbar__link-home navbar__main'>
          <NavLink exact to='/'>
            <img
              src='/images/somm-planet-logo-white-removebg.png'
              alt='logo'
              className='navbar__logo'
            />
          </NavLink>
        </div>
        <ul className='navbar navbar__linkList navbar__main'>
          <li className='navbar__link'>
            <MenuButton />
          </li>
          <li className='navbar__link'>
            <NavLink exact to='/'>
              Articles
            </NavLink>
          </li>
          {isLoaded && sessionLinks}
        </ul>
        <h2 className='search__header'>Explore Wine</h2>
        <Select id='search__container' options={options} />
      </div>
    </nav>
  );
}

export default Navigation;
