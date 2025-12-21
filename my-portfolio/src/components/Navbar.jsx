import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navBar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>

      <NavLink to="/projects" className="nav-link">
        Projects
      </NavLink>

      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
    </nav>
  );
}
