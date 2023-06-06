import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ toggle, toggleNav }) {
  return (
    <nav className={`nav ${toggle ? "open" : ""}`}>
      <ul className="nav__list">
        
        <li className="nav__item">
          <NavLink
            exact
            to="/"
            className="nav__link"
            activeClassName="selected"
            onClick={toggleNav}
          >
            HOME
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            exact
            to="/lunch-menu"
            className="nav__link"
            activeClassName="selected"
            onClick={toggleNav}
          >
            LUNCH MENU
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            exact
            to="/dinner-menu"
            className="nav__link"
            activeClassName="selected"
            onClick={toggleNav}
          >
            DINNER MENU
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            exact
            to="/reception-food"
            className="nav__link"
            activeClassName="selected"
            onClick={toggleNav}
          >
            RECEPTION FOOD
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            exact
            to="/drinks"
            className="nav__link"
            activeClassName="selected"
            onClick={toggleNav}
          >
            DRINKS
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            exact
            to="/cheesecake"
            className="nav__link"
            activeClassName="selected"
            onClick={toggleNav}
          >
            CHEESECAKE
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            exact
            to="/contact"
            className="nav__link"
            activeClassName="selected"
            onClick={toggleNav}
          >
            CONTACT
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
}

export default Nav;