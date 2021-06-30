import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./component/Header/Header";
import Navigation from "./component/Navigation/Navigation.jsx";
import StatUser from "./pages/StatUser/StatUser";
import Home from "./pages/Home/Home.jsx";

import "./css/reset.css";
import "./css/header.css";
import "./css/navigation.css";
import "./css/statUser.css";
import "./css/userKeys.css";
import "./css/chart.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/:id" component={StatUser} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
