import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo">
          <i className="fa-solid fa-music fa-jello"></i> La Renga
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/labanda">La Banda</Link></li>
          <li><Link to="/discografia">Discografia</Link></li>
          <li><Link to="/galeria">Galeria</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}