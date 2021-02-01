import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRegions } from "../../store/region";
import Wine from "../Wine";
import "./HomePage.css";

function HomePage() {
  const dispatch = useDispatch();

  let wines = [];
  const region = useSelector((state) => state.region[1]);
  if (region) {
    wines = region.Wines;
  }

  useEffect(() => {
    dispatch(getRegions());
  }, [dispatch]);

  return (
    <div className='home__container'>
      <div className='home__header'>
        <h1>Cheers 🥂</h1>
        <h1>We are glad you are here!</h1>
        <div className='home__subheader'>
          <h2>
            Whether you are looking for a wine recommendation or just want to
            learn more, Somm Planet is here for you!
          </h2>
        </div>
      </div>
      <div className='home__featured_wines-container'>
        <h2>Monthly Featured Wines</h2>
        <div className='home__featured-wines'>
          <div>
            {wines &&
              wines.map((wine) => (
                <div>
                  <Wine wine={wine} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
