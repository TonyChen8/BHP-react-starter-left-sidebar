import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class Example extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: props.isOpen
    };
  }

  componentWillReceiveProps(props) {
    const { isOpen } = props;
    if (isOpen !== this.state.isOpen) {
      this.setState({ isOpen: isOpen });
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="sidebar-container">
        <aside
          className={
            isOpen === true ? "sidebar outer" : "sidebar outer hide-side-bar"
          }
        >
          <div className="overlay" onClick={this.toggle} />
          <div className="entries">
            <div className="entry">
              <div className="link">
                <i className="fas fa-file link-icon" name="file" />
                Sidebar menu
                <i className="fas fa-angle-down toggle" name="down" />
              </div>
              <div className="sub-links">
                <Link className="link" to="/">
                  Go to home page
                </Link>
                <Link className="link" to="/page1">
                  Go to page 1
                </Link>
                <Link className="link" to="/page2">
                  Redirect to 404 page
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}
