import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <p>
          Created by <strong>Olivia Marolf</strong> ©2024
        </p>
      </div>

      <div className="links-container">
        <div>
          <div className="link-title">
            <h3>SITEMAP</h3>
          </div>
          <ul>
            <li>
              <NavLink exact to="/">
                HOME
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li> */}
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
            <li>
              <NavLink to="/design-process">DESIGN PROCESS</NavLink>
            </li>
            <li>
              <NavLink to="/curriculum-design">CURRICULUM DESIGN</NavLink>
            </li>
            <li>
              <NavLink to="/huddleup">HUDDLEUP</NavLink>
            </li>
            <li>
              <NavLink to="/rpre">REAL PATREA REAL ESTATE</NavLink>
            </li>
          </ul>
        </div>

        <div>
          <div className="link-title">
            <h3>SOCIAL</h3>
          </div>

          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/livmarolf"
              >
                GITHUB
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/oliviamarolf/"
              >
                LINKEDIN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
