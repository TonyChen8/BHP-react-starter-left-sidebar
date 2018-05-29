import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Contents from "../Contents";

const RedirectAs404 = ({ location }) => (
  <Redirect to={Object.assign({}, location, { state: { is404: true } })} />
);

export default class BHPRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={() => <Contents />} />
        <Route path="/page1" component={() => <Contents />} />
        <Route component={RedirectAs404} />
      </Switch>
    );
  }
}
