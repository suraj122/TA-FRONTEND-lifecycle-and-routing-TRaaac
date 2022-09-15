import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <ul className="flex navbar">
      <li>
        <NavLink activeclassname="active" className="nav-item" to="/">
          Popular
        </NavLink>
      </li>
      <li>
        <NavLink activeclassname="active" className="nav-item" to="/battle">
          Battle
        </NavLink>
      </li>
    </ul>
  );
}

export default Header;
