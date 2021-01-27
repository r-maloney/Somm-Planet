import { Route, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Country = () => {
  const countries = useSelector((state) => Object.values(state.country));

  return (
    <div className='home'>
      <div className='buttons'>
        {countries.map((country) => (
          <NavLink
            key={country.id}
            id={country.id}
            to={`/country/${country.id}`}
          >
            {country.name}
          </NavLink>
        ))}
        {/* Map over the instructors. For each instructor...
            1. Create a NavLink that
              a. Has a 'key' prop of the instructor's id
              b. Has an 'id' prop of the instructor's id
              c. Redirects the user to '/groups/${id}, ${id} 
                  being the instructor's id.
              d. Display's the instructor's name             TODO 3 */}
      </div>
      <Route path='/groups/:instructorId'></Route>
    </div>
  );
};

export default Country;
