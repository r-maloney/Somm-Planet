import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Country from "./components/Country";
import CountryDetails from "./components/CountryDetails";
import Article from "./components/Article";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />

      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/countries/:countryId'>
          <CountryDetails />
        </Route>
        <Route path='/articles'>
          <Article />
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </>
  );
}

export default App;
