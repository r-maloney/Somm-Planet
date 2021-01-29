import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const RegionDetails = () => {
  const { regionId } = useParams();

  const regions = useSelector((state) => Object.values(state.region));

  const region = regions.find((r) => Number(r.id) === Number(regionId));

  return (
    <div>
      {region && (
        <>
          <h1>Region Details</h1>
          <p>{region.name}</p>
          <p>{region.description}</p>
          <img src={region.imgUrl} alt={"wine region"} />
        </>
      )}
    </div>
  );
};

export default RegionDetails;
