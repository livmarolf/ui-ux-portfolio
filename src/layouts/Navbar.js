import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="btn-container home">
          <Link to="/">
            <button>HOME</button>
          </Link>
        </div>

        <div className="links-container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/livmarolf"
          >
            <div className="link">
              GITHUB
              <Arrow />
            </div>
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/oliviamarolf/"
          >
            <div className="link">
              LINKEDIN
              <Arrow />
            </div>
          </a>

          <a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:d5780d4d-5ebf-4a50-a406-6da40a111ff3"
            target="_blank"
            rel="noreferrer"
          >
            <div className="link">
              RESUME
              <Arrow />
            </div>
          </a>
        </div>
      </div>

      <div className="nav-right">
        <div className="bio">
          <p>OLIVIA MAROLF</p>
          <p>MULTIDISCIPLINARY DESIGNER</p>
          <p>BASED IN SALT LAKE CITY, UT</p>
        </div>

        <div className="btn-container">
          <Link to="/contact">
            <button>CONTACT ME</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
