import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import React from "react";
import "../../assests/styles/layout/navBar.css";
import AppRoutes from "../../routes/RouterConfig";
import useGetUserProfile from '../../hooks/user/useGetUserProfile'


const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useGetUserProfile()
  
  

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicked outside
  const handleClickOutside = (event) => {
    if (!event.target.closest(".nav-bar-user-section")) {
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
  };

  // Add event listener to handle clicks outside the dropdown
  React.useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="nav-bar-user-section" onClick={toggleDropDown}>
      <FaUserCircle className="user-icon" />

      {isOpen && (
        <div className="user-section-dropdown">
          <p>Welcome {data.firstName}</p>
          <a href={AppRoutes.userDashBoard}>Dashboard</a>
          <hr />
          <div onClick={handleLogout}>
            {/* <button className="logoutt">Log out</button> */}
            <a href={AppRoutes.home} className="logout">
              Log out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
