import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul className="menu__list">
      <li className="menu__list-item">
        <NavLink className="menu__link " to="/" exact>
          Home
        </NavLink>
      </li>
      <li className="menu__list-item">
        <NavLink className="menu__link" to="/our_projects">
          Our Projects
        </NavLink>
      </li>
      <li className="menu__list-item">
        <NavLink className="menu__link" to="/about">
          About us
        </NavLink>
      </li>
      <li className="menu__list-item">
        <NavLink className="menu__link" to="/contact">
          Contact us
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
