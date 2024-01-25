import { useState } from "react";
import { MenuItems } from "../data/MenuItems";
import { Link } from "react-router-dom";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div
      onClick={handleClick}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      {MenuItems.map((item, index) => {
        return (
          <div key={index} className="link">
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
