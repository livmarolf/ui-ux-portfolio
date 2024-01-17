import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="title-wrapper">
        <h6>VALUE</h6>
      </div>

      <div className="navlinks-wrapper">
        <div className="navlink">
          <NavLink exact to="/">
            HOME
          </NavLink>
        </div>
        <div className="navlink">
          <NavLink to="/about">ABOUT</NavLink>
        </div>
        <div className="navlink">
          <NavLink to="/contents">CONTENTS</NavLink>
        </div>
        <div className="navlink">
          <NavLink to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
}
