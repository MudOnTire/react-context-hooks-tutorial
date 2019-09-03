import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseContext from "./UseContext";
import UseCallback from "./UseCallback";
import { StoreProvider } from "../contexts/store";

export default function index() {
  return (
    <StoreProvider>
      <nav>
        <ul>
          <li>
            <Link to="/useState">useState</Link>
          </li>
          <li>
            <Link to="/useEffect">useEffect</Link>
          </li>
          <li>
            <Link to="/useContext">useContext</Link>
          </li>
          <li>
            <Link to="/useCallback">useCallback</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/useState" component={UseState}></Route>
        <Route path="/useEffect" component={UseEffect}></Route>
        <Route path="/useContext" component={UseContext}></Route>
        <Route path="/useCallback" component={UseCallback}></Route>
      </Switch>
    </StoreProvider>
  );
}
