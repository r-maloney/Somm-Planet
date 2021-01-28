import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "../../store/country";
import Select from "react-select";

const Country = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => Object.values(state.country));
  const options = [];

  countries.forEach((country) => {
    options.push({ value: country.name, label: country.name });
  });
  console.log(options);

  useEffect(() => {
    dispatch(getCountries());
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
      <Select options={options} />
    </div>
  );
};

export default Country;
