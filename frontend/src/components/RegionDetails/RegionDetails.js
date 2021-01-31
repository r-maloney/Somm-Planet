import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../Region/Region.css";

const RegionDetails = () => {
  const { regionId } = useParams();

  const regions = useSelector((state) => Object.values(state.region));
  const region = regions.find((r) => Number(r.id) === Number(regionId));

  return (
    <>
      <div className='region__details'>
        {region && (
          <>
            <h3>{region.name}</h3>
            <p>{region.description}</p>
            <div className='region__img'>
              <img src={region.imgUrl} alt={"wine region"} />
            </div>
          </>
        )}
      </div>
      <div className='region__details-wine'>
        <h2>Featured Wines</h2>
        <ul>
          {region.Wines.map((wine) => (
            <li key={wine.id}>{wine.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RegionDetails;
