import React, { useState } from "react";
import Headerlogo from "../../assets/images/art-homes-logo1.png";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Backdrop from "./Backdrop";
import SideDrawer from "./SideDrawer";

const Header = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <div className="header-wrapper">
        {/* 
        {this.state.drawerIsOpen && <Backdrop onClick={this.closeDrawer} />}
        {this.state.drawerIsOpen && (
          <CSSTransition
            in={this.state.drawerIsOpen}
            timeout={200}
            classNames="slide-in-left"
            mountOnEnter
            unmountOnExit
          >
            <aside className="side-bar" onClick={this.closeDrawer}>
              <div className="">
                <FontAwesomeIcon
                  size="2x"
                  icon={faTimes}
                  className="close-icon"
                  onClick={this.closeDrawer}
                />
              </div>

              <NavLinks />
            </aside>
          </CSSTransition>
        )}
         */}

        <nav className="menu">
          <button className="main-navigation__menu-btn " onClick={openDrawer}>
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
    </React.Fragment>
  );
};

export default Header;
