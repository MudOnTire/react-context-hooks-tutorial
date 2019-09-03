import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UseState from "./UseState";
import UseEffect from "./UseEffect";

export default function index() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/useState">useState</Link>
          </li>
          <li>
            <Link to="/useEffect">useEffect</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/useState" component={UseState}></Route>
        <Route path="/useEffect" component={UseEffect}></Route>
      </Switch>
    </>
  );
}
