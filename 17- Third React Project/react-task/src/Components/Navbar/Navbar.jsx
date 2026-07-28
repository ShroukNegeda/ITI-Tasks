import { NavLink } from "react-router-dom";
import NavbarStyle from "./Navbar.module.css";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? `nav-link ${NavbarStyle.active}` : "nav-link";

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          MyStore
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={linkClass} to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/gallery">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/store">
                Store
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}