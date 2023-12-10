import { Link, NavLink } from "react-router-dom";

function PageNav() {
  return (
    <header className="main-header">
      <div className="header-icon">
        <img src="rocket-icon-64.png" alt="Rocket Icon" />
        <Link className="header-title" to="/">
          SpaceX Dashboard
        </Link>
      </div>
      <div className="route-link">
        <NavLink className="route-button" to="/">
          Home
        </NavLink>
        <NavLink className="route-button" to="/analytics">
          Analytics
        </NavLink>
      </div>
    </header>
  );
}

export default PageNav;
