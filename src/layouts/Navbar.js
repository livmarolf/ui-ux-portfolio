// TODO: make sure links are being used in the proper places not navlinks.
// TODO: make a click outside hook

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down.svg";
import { ReactComponent as ArrowUp } from "../assets/icons/arrow-up.svg";
import { MenuItems } from "../data/MenuItems";

function Navbar() {
  const location = useLocation();
  const [dropdown, setDropdown] = useState(false);
  const title = MenuItems.find((el) => el.path === location.pathname)?.title;

  return (
    <nav className="navbar">
      <h6>{title}</h6>
      <div className="navlinks-wrapper">
        <div className="navlink">
          <Link to="/">HOME</Link>
        </div>
        <div
          className="dropdown-link"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <Link to="/contents" className="nav-link">
            CONTENTS {dropdown ? <ArrowUp /> : <ArrowDown />}
          </Link>
          {dropdown && <Dropdown />}
        </div>
        <div className="navlink">
          <Link to="/contact">CONTACT</Link>
        </div>
        <div className="navlink">
          <Link to="/about">ABOUT</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
