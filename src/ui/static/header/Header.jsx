import React, { useState } from "react";
import Nav from "../nav/Nav";
import { Link } from "react-router-dom";
// import logo from "../../../assets/logo.png";
import logoText from "../../../assets/logo.png";
function Header() {
  const [toggle, setToggle] = useState(false);

  function toggleNav() {
    setToggle(!toggle);
  }

  return (
    <header className={`header ${toggle ? "fixed" : ''}`}>
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <img src={logoText} className="header__logo-icon header__logo-iconText" alt="Becky's Catering Kitchen" />
                </Link>
                <div className={`header__toggle ${toggle ? "open" : ""}`} onClick={toggleNav}><span className="header__toggle-bars"/></div>
            </div>
            <Nav toggle={toggle} toggleNav={toggleNav}></Nav>
        </header>
  );
}

export default Header;