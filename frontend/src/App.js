import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {/* is below needed with Modals now?  */}
      {/* {isLoaded && (
        <Switch>
          <Route path='/signup'>
            <RegistrationForm />
          </Route>
        </Switch>
      )} */}
    </>
  );
}

export default App;
