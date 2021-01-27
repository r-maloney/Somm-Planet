import { Route, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "../../store/country";

const Country = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => Object.values(state.country));

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className='home'>
      <div className='buttons'>
        {countries.map((country) => (
          <NavLink
            key={country.id}
            id={country.id}
            to={`/country/${country.id}`}
          >
            {country.name}
          </NavLink>
        ))}
      </div>
      <Route path='/country/:countryId'></Route>
    </div>
  );
};

export default Country;
