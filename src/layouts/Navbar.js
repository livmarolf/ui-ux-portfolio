import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/livmarolf"
          >
            GITHUB
          </a>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.8783 17.931L21.1702 9.83765L13.0769 10.5457"
              stroke="white"
              stroke-width="0.8"
              stroke-miterlimit="10"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M10.8319 22.1626L21.0703 9.96094"
              stroke="white"
              stroke-width="0.8"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/oliviamarolf/"
          >
            LINKEDIN
          </a>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.8783 17.931L21.1702 9.83765L13.0769 10.5457"
              stroke="white"
              stroke-width="0.8"
              stroke-miterlimit="10"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M10.8319 22.1626L21.0703 9.96094"
              stroke="white"
              stroke-width="0.8"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div>
          <Link>RESUME</Link>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.8783 17.931L21.1702 9.83765L13.0769 10.5457"
              stroke="white"
              stroke-width="0.8"
              stroke-miterlimit="10"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M10.8319 22.1626L21.0703 9.96094"
              stroke="white"
              stroke-width="0.8"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div>
          <Link>EMAIL</Link>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.8783 17.931L21.1702 9.83765L13.0769 10.5457"
              stroke="white"
              stroke-width="0.8"
              stroke-miterlimit="10"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M10.8319 22.1626L21.0703 9.96094"
              stroke="white"
              stroke-width="0.8"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
