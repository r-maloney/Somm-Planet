import Region from "../Region";
import { useParams, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "../../store/country";
import Article from "../Article";
import RegionDetails from "../RegionDetails/RegionDetails";
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
      <h2 className='country__header'>{country.name}</h2>
      <div>
        <Region />
      </div>
      <div className='region__container'>
        <div className='region__map'>
          <img
            src='https://media.winefolly.com/France-Wine-Map-by-WineFolly.jpg'
            alt='Map of wine regions in France.'
          />
        </div>
        <Switch>
          <Route path={`/countries/${countryId}/:regionId`}>
            <RegionDetails />
          </Route>
        </Switch>
      </div>

      <div>
        <Article country={country} />
      </div>
    </>
  );
};

export default CountryDetails;
