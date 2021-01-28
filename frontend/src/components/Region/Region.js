import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRegions } from "../../store/region";

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
        <NavLink key={region.id} id={region.id} to={`/country/${region.id}`}>
          {region.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Region;
