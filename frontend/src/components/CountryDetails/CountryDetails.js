import Region from "../Region";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "../../store/country";

const CountryDetails = () => {
  const { countryId } = useParams();
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.country);
  const country = countries[countryId];

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <>
      <h2>Welcome to {country.name}!</h2>

      <Region />
    </>
  );
};

export default CountryDetails;
