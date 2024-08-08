import '../../assests/styles/nav.css'
import { Link } from 'react-router-dom';
import AppRoutes from '../../routes/RouterConfig';


const Nav = () => {

    return <nav className="navbar">

    <ul className="nav-links">

      <li className="logo">Logo</li>
      <li className="nav-link">Home</li>
      <li className="nav-link">About</li>
      <li className="nav-link">Services</li>
      <li className="nav-link">Contact</li>
    </ul>

    <Link to={AppRoutes.login}>
        <button className="nav-button">Login</button>
      </Link>
      <Link to={AppRoutes.register}>
        <button className="nav-button">Register</button>
    </Link>

    
  </nav>

}

export default Nav
