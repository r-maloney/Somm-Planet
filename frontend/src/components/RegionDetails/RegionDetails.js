import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../Region/Region.css";
import Wine from "../Wine";

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
        <h2 className='wine__details-header'>Featured Wines</h2>
        <div className='wine__details-list'>
          {region &&
            region.Wines.map((wine) => (
              <Wine key={wine.id} region={region} wine={wine}></Wine>
            ))}
        </div>
      </div>
    </>
  );
};

export default RegionDetails;
