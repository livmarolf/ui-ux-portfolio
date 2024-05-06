import { ReactComponent as Arrow } from "../assets/arrow.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
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
        </div>

        <div className="links-container">
          <a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:4c292ec3-b859-4668-b4d3-17b346f4e3d5"
            target="_blank"
            rel="noreferrer"
          >
            <div className="link">
              RESUME
              <Arrow />
            </div>
          </a>

          <a href="mailto:livmarolf@gmail.com" target="_blank" rel="noreferrer">
            <div className="link">
              EMAIL
              <Arrow />
            </div>
          </a>
        </div>
      </div>

      <div className="nav-right">
        <div className="bio">
          <p>OLIVIA MAROLF</p>
          <p>UI/UX DESIGNER & SOFTWARE DEVELOPER</p>
          <p>BASED IN SALT LAKE CITY, UT</p>
        </div>

        <div className="btn-container">
          <button>CONTACT ME</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
