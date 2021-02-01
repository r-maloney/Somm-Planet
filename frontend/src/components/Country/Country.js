import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "../../store/country";
import { getArticles } from "../../store/article";

const Country = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => Object.values(state.country));

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <div>
      {countries.map((country) => (
        <NavLink
          key={country.id}
          id={country.id}
          to={`/countries/${country.id}`}
        >
          {country.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Country;
