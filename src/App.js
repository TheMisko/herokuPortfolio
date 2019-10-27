import React from "react";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Design1 from "./pages/design-1";
import Design2 from "./pages/design-2";
import Contact from "./pages/contact";
import OneFrame from "./pages/oneFrame";
import Hac5 from "./pages/hac5";
import TravelAgency from "./pages/travelAgency";
import FilmOst from "./pages/filmOst";
import "./App.css";

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/design-1" exact component={Design1} />
          <Route path="/design-2" exact component={Design2} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/project/OneFrame" exact component={OneFrame} />
          <Route path="/project/Hac5" exact component={Hac5} />
          <Route path="/project/TravelAgency" exact component={TravelAgency} />
          <Route path="/project/FilmOst" exact component={FilmOst} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
