import React, { Component } from "react";
import Headerlogo from "../../assets/images/art-homes-logo1.png";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Backdrop from "./Backdrop";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerIsOpen: false,
      drawerIsClose: true,
    };
  }

  openDrawer = () => {
    this.setState({
      drawerIsOpen: true,
      drawerIsClose: false,
    });
  };

  closeDrawer = () => {
    this.setState({
      drawerIsOpen: false,
      drawerIsClose: true,
    });
  };

  render() {
    return (
      <div className="header-wrapper">
        {this.state.drawerIsOpen && <Backdrop onClick={this.closeDrawer} />}
        {this.state.drawerIsOpen && (
          <CSSTransition
            in={this.state.drawerIsOpen}
            timeout={200}
            classNames="slide-in-right"
            mountOnEnter
            unmountOnExit
          >
            <div className="side-bar" onClick={this.closeDrawer}>
              <div className="">
                <FontAwesomeIcon
                  size="2x"
                  icon={faTimes}
                  className="close-icon"
                  onClick={this.closeDrawer}
                />
              </div>

              <NavLinks />
            </div>
          </CSSTransition>
        )}

        <nav className="menu">
          <button
            className="main-navigation__menu-btn "
            onClick={this.openDrawer}
          >
            <span />
            <span />
            <span />
          </button>
          <NavLink className="logo-wrapper" to="/">
            <img src={Headerlogo} alt="" className="menu__logo" />
          </NavLink>

          <div className="navbar-item">
            <NavLinks />
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
