import React from "react";
import { NavBar, BHPIcon, BHPLogo, Themes, ThemeManager } from "bhp-ui-react";
import {
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import PropTypes from "prop-types";

export default class Example extends React.Component {
  static propTypes = {
    onToggleSidebar: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      theme: Themes[0]
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    const { theme } = this.state;
    const { onToggleSidebar } = this.props;

    return (
      <NavBar
        className="navbar-dark bg-bhp-orange-1"
        staticComponent={
          <div>
            {onToggleSidebar && (
              <BHPIcon
                className="fas fa-bars align-middle text-white navbar-sidebar-switch"
                size={21}
                style={{ marginLeft: "10px", marginRight: "30px" }}
                onClick={() => onToggleSidebar()}
              />
            )}
            <BHPLogo className="align-middle" color="white" />
          </div>
        }
      >
        <div className="navbar-layout">
          <ThemeManager theme={theme}>
            <UncontrolledDropdown>
              <DropdownToggle caret>{theme.name}</DropdownToggle>
              <DropdownMenu>
                {Themes.map((theme, index) => (
                  <DropdownItem
                    key={theme.name}
                    onClick={() => this.setState({ theme })}
                  >
                    {theme.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </ThemeManager>

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button color="primary">Search</Button>
          </form>
        </div>
      </NavBar>
    );
  }
}
