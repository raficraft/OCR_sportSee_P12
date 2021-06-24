import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./component/Header/Header";
import Navigation from "./component/Navigation/Navigation";
import StatUser from "./pages/StatUser";
import NotFound from "./pages/NotFoud";
import FetchContext from "./contexts/fetchContext";
import useFetch from "./Hooks/useFetch";

import "./css/reset.css";
import "./css/header.css";
import "./css/navigation.css";
import "./css/statUser.css";
import "./css/userKeys.css";
import "./css/chart.css";

function App(props) {

  return (
    <>
      <Header />
      <main className="App">
        <Navigation />
        <Switch>
          <Route exact path="/user/:id" component={StatUser} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </>
  );
}

export default App;
