import { NavLink, useParams } from "react-router-dom";
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
        <>
          <button>{region.name}</button>
          <RegionDetails />
        </>
      ))}
    </div>
  );
};

export default Region;
