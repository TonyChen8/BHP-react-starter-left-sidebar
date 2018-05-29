import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import Routes from "../Routes";
import NotFoundPage from "../404";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideBarOpen: false
    };
  }

  openSidebar() {
    this.setState({ isSideBarOpen: true });
  }

  render() {
    const { isSideBarOpen } = this.state;
    return (
      <Router>
        <Route
          render={({ location }) => {
            return location.state && location.state.is404 ? (
              <NotFoundPage />
            ) : (
              <div className="layout-container">
                <div style={{}}>
                  <Topbar onToggleSidebar={this.openSidebar.bind(this)} />
                </div>
                <div className="body">
                  <Sidebar isOpen={isSideBarOpen} />
                  <div className="routes-container">
                    <Routes />
                  </div>
                </div>
              </div>
            );
          }}
        />
      </Router>
    );
  }
}
