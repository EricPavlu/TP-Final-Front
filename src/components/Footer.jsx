import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <ul className="footer-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/labanda">La Banda</Link></li>
        <li><Link to="/discografia">Discografia</Link></li>
        <li><Link to="/galeria">Galeria</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
        <div className="footer-social">
            <a href="https://www.facebook.com/larenga" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/larenga/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com/@larenga" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/@larenga" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>

        </div>
    </footer>
  );
}