import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import AuthFormModal from "../AuthFormModal";
import MenuButton from "./MenuButton";
import { getCountries } from "../../store/country";
import Select from "react-select";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

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
  const regions = useSelector((state) => Object.values(state.region));
  const options = [];

  countries.forEach((country) => {
    options.push({
      value: { id: country.id, state: "country" },
      label: country.name,
    });
  });
  regions.forEach((region) => {
    options.push({
      value: { id: region.id, state: "region", countryId: region.countryId },
      label: region.name,
    });
  });

  const onChange = ({ value }) => {
    const { id, state, countryId } = value;
    if (state === "country") history.push(`/countries/${id}`);
    if (state === "region") history.push(`/countries/${countryId}/${id}`);
  };

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
        <ul className='navbar navbar__linkList navbar__main' id='navbar__list'>
          <li className='navbar__link'>
            <MenuButton />
          </li>
          <li className='navbar__link'>
            <NavLink exact to='/articles'>
              Stories
            </NavLink>
          </li>
          {isLoaded && sessionLinks}
        </ul>
        <h2 className='search__header'>Explore Wine Regions</h2>
        <Select onChange={onChange} id='search__container' options={options} />
      </div>
    </nav>
  );
}

export default Navigation;
