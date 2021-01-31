import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRegions } from "../../store/region";
import "./Region.css";

const Region = () => {
  const dispatch = useDispatch();
  const { countryId } = useParams();

  const regions = useSelector((state) => Object.values(state.region)).filter(
    (region) => Number(region.countryId) === Number(countryId)
  );

  useEffect(() => {
    dispatch(getRegions());
  }, [dispatch]);

  return (
    <div>
      <h3 className='regions__header'>Explore wine regions</h3>
      <div className='regions__list'>
        {regions.map((region) => (
          <NavLink key={region.id} to={`/countries/${countryId}/${region.id}`}>
            {region.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Region;
