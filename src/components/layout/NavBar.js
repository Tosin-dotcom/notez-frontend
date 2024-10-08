import "../../assests/styles/layout/navBar.css";
import AppRoutes from "../../routes/RouterConfig";
import UserDropdown from "./UserDropDown";
import Logo from '../../assests/images/logo.png'


const NavBar = () => {
  return (
    <header className="nav-bar">
      <nav className="nav-bar-container">
        <div className="nav-bar-logo">
          <a href={AppRoutes.home}><img src={Logo} className="app-logo" alt="Logo"/></a>
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
