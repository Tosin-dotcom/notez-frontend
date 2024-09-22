import "../../assests/styles/note/sideNavBar.css";
import { FaHome, FaBook, FaCog, FaPlus } from "react-icons/fa";
import AppRoutes from "../../routes/RouterConfig";

const SideNav = () => {
  return (
    <section className="side-nav">
      <h2 className="side-nav-title">My Journal</h2>

      <ul className="side-nav-list">
        <a href={AppRoutes.userDashBoard}>
          <li className="side-nav-item">
            <FaHome className="side-nav-icon" />
            <span>DashBoard</span>
          </li>
        </a>

        <a href={AppRoutes.createNote}>
          <li className="side-nav-item">
            <FaPlus className="side-nav-icon" />
            <span>Create Note</span>
          </li>
        </a>

        <a href={AppRoutes.allNotes}>
          <li className="side-nav-item">
            <FaBook className="side-nav-icon" />
            <span>My Notes</span>
          </li>
        </a>

        <li className="side-nav-item">
          <FaCog className="side-nav-icon" />
          <span>Settings</span>
        </li>
      </ul>
    </section>
  );
};

export default SideNav;
