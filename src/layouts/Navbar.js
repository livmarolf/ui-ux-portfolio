import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h6>VALUE</h6>
      <ul>
        <li>
          <NavLink exact to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  );
}
