import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down.svg";
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
          <Link className="main-link" to="/">
            HOME
          </Link>
        </div>

        <div className="navlink">
          <Link className="main-link" to="/about">
            ABOUT
          </Link>
        </div>

        <div className="navlink">
          <Link className="main-link" to="/contact">
            CONTACT
          </Link>
        </div>

        <div
          className="navlink"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <button
            className={dropdown ? "dropdown-btn clicked" : "dropdown-btn"}
            to="/contents"
          >
            CONTENTS <ArrowDown />
          </button>
          {dropdown && <Dropdown />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
