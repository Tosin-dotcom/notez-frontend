import "../../assests/styles/layout/navBar.css";
import AppRoutes from "../../routes/RouterConfig";
import UserDropdown from "./UserDropDown";

const NavBar = () => {
  return (
    <header className="nav-bar">
      <nav className="nav-bar-container">
        <div className="nav-bar-logo">
          <h2>Logo</h2>
        </div>

        <div className="nav-bar-link">
          <a href={AppRoutes.home}>Home</a>
          <a href={AppRoutes.allNotes}>Notes</a>
        </div>
    
        <UserDropdown />
        
      </nav>
    </header>
  );
};

export default NavBar;
