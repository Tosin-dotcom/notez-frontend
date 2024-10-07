import "../../assests/styles/nav.css";
import { Link } from "react-router-dom";
import AppRoutes from "../../routes/RouterConfig";
import UserDropdown from "./UserDropDown";

import { useGlobalContext } from "../../Context";

const Nav = () => {
  const { isAuthenticated } = useGlobalContext();

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="logo">Logo</li>
        <li className="nav-link">Home</li>
        <li className="nav-link">About</li>
        <li className="nav-link">Services</li>
        <li className="nav-link">Contact</li>
      </ul>

      {!isAuthenticated ? (
        <div className="auth-section">
          <Link to={AppRoutes.login}>
            <button className="nav-button">Login</button>
          </Link>
          <Link to={AppRoutes.register}>
            <button className="nav-button">Register</button>
          </Link>
        </div>
      ) : (
        <UserDropdown />
      )}
    </nav>
  );
};

export default Nav;
