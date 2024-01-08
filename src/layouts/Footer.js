import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <p>Created by Olivia Marolf ©2024</p>
      </div>

      <div>
        <div>
          <div>
            <h3>SITEMAP</h3>
          </div>
          <ul>
            <li>
              <NavLink exact to="/">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/contents">CONTENTS</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>

        <div>
          <div>
            <h3>SOCIAL</h3>
          </div>

          <ul>
            <li>
              <a href="https://github.com/livmarolf">GITHUB</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/oliviamarolf/">LINKEDIN</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
