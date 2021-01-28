import Region from "../Region";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "../../store/country";
import "./CountryDetails.css";

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
      <img
        src='https://media.winefolly.com/France-Wine-Map-by-WineFolly.jpg'
        alt='Map of wine regions in France.'
      />
      <div>
        <ul>
          <li>
            <Region />
          </li>
        </ul>
      </div>
    </>
  );
};

export default CountryDetails;
