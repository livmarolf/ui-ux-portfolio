import { MenuItems } from "../data/MenuItems";
import { Link } from "react-router-dom";

function Dropdown({ onClick }) {
  const pages = MenuItems.filter((item) => item.subPage === true);

  return (
    <div onClick={onClick} className="dropdown-menu">
      {pages.map((item, id) => {
        return (
          <div key={id} className="dropdown-item">
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
