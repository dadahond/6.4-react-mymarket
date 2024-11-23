// rrd imports
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="container">
      <div className="navbar_menu">
        <nav className="navbar_menu_list">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Blog</NavLink>
          <NavLink to="/contact">Works</NavLink>
        </nav>
        <img className="burger-menu" src="./burger-menu.svg" alt="" />
      </div>
    </header>
  );
}

export default Navbar;
