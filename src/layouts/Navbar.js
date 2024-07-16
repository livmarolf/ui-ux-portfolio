import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { Link } from "react-router-dom";
import ProgressCircle from "../components/motion/ProgressCircle";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <ProgressCircle />

        <div className="btn-container">
          <Link to="/">
            <button>HOME</button>
          </Link>
        </div>

        <div className="btn-container">
          <Link to="/contact">
            <button>CONTACT ME</button>
          </Link>
        </div>
      </div>

      <div className="nav-right">
        <div className="links-container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.figma.com/@livmarolf"
          >
            <div className="link">
              FIGMA
              <Arrow />
            </div>
          </a>

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
            href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:d43b8060-d87c-42d6-b97d-6e0b8a6d30bf"
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
    </nav>
  );
}

export default Navbar;
