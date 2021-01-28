import { useSelector } from "react-redux";
import { useState } from "react";

const CountryMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const countries = useSelector((state) => Object.values(state.country));

  return (
    <div className='country-menu__container'>
      <button
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        Countries
      </button>
      {showMenu && (
        <ul>
          {countries.map((country) => (
            <li key={country.id}>{country.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryMenu;
