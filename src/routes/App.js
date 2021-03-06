import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* Layout */
import Dashboard from "../layout/Dashboard/Index";
import NotFound from "../layout/NotFound/Index";
/* Views */
import Home from "../views/Home/Index";
import Fibonacci from "../views/Fibonacci/Index";
import Sequence from "../views/Sequence/Index";
import Movies from "../views/Movies/Index";

const App = () => (
  <BrowserRouter>
    <Dashboard>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/exercise1" component={Fibonacci} />
        <Route exact path="/exercise2" component={Sequence} />
        <Route exact path="/exercise3" component={Movies} />
            {/* <Route exact path="/exercise_3/movie/:id" component={} /> */}
        <Route component={NotFound} />
      </Switch>
    </Dashboard>
  </BrowserRouter>
);

export default App;
