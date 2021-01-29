import { Route, useParams, NavLink, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRegions } from "../../store/region";
import RegionDetails from "../RegionDetails/RegionDetails";

const Region = () => {
  const dispatch = useDispatch();
  const { countryId } = useParams();

  const regions = useSelector((state) => Object.values(state.region)).filter(
    (region) => Number(region.countryId) === Number(countryId)
  );

  useEffect(() => {
    dispatch(getRegions(countryId));
  }, [dispatch, countryId]);

  return (
    <div>
      <p>regions</p>
      {regions.map((region) => (
        <NavLink key={region.id} to={`/countries/${countryId}/${region.id}`}>
          {region.name}
        </NavLink>
      ))}
      <Switch>
        <Route path={`/countries/${countryId}/:regionId`}>
          <RegionDetails />
        </Route>
      </Switch>
    </div>
  );
};

export default Region;
