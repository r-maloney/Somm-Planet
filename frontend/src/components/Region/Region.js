import { Route, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRegions } from "../../store/region";

const Region = () => {
  const dispatch = useDispatch();
  const regions = useSelector((state) => Object.values(state.region));

  useEffect(() => {
    dispatch(getRegions());
  }, [dispatch]);

  return (
    <div className='home'>
      <div className='buttons'>
        {regions.map((region) => (
          <NavLink key={region.id} id={region.id} to={`/region/${region.id}`}>
            {region.name}
          </NavLink>
        ))}
      </div>
      <Route path='/region/:regionId'></Route>
    </div>
  );
};

export default Region;
