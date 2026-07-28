import { NavLink, Outlet } from "react-router-dom";

export default function Gallery() {
  return (
    <div>
      <h2>Gallery</h2>
      <p className="text-muted">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum recusandae cupiditate dolore suscipit consequatur doloremque repellendus ipsam, quibusdam, accusantium impedit asperiores temporibus. Quis cum neque nesciunt itaque facilis, accusamus nostrum!
      </p>
      <ul className="nav nav-pills mb-3">
        <li className="nav-item">
          <NavLink className="nav-link" to="/gallery" end>
            Overview
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/gallery/photos">
            Photos
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}