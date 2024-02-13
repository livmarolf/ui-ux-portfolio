import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down.svg";
import { ReactComponent as Bars } from "../assets/icons/bars.svg";
import { MenuItems } from "../data/MenuItems";

function Navbar() {
  const location = useLocation();
  const [dropdown, setDropdown] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const title = MenuItems.find((el) => el.path === location.pathname)?.title;

  return (
    <nav className="navbar">
      <h6>{title}</h6>

      <Bars onClick={() => setNavOpen(!navOpen)} />

      <div
        className={navOpen ? "navlinks-wrapper open" : "navlinks-wrapper"}
        onClick={() => setNavOpen(!navOpen)}
      >
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

        {navOpen ? (
          <div className="navlink">
            <div className="contents-header">
              CONTENTS <ArrowDown />
            </div>
            <Dropdown />
          </div>
        ) : (
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
            {dropdown && <Dropdown onClick={() => setDropdown(false)} />}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
