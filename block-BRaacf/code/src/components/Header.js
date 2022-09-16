import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <ul className="flex">
      <li>
        <NavLink activeclassname="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeclassname="active" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeclassname="active" to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default Header;
