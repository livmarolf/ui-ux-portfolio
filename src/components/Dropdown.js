import { useState } from "react";
import { MenuItems } from "../data/MenuItems";
import { Link } from "react-router-dom";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const pages = MenuItems.filter((item) => item.subPage === true);

  return (
    <div
      onClick={handleClick}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      {pages.map((item, id) => {
        return (
          <div key={id} className="dropdown">
            <Link className={item.cName} to={item.path}>
              {item.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Dropdown;
