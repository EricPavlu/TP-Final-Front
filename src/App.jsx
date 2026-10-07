import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import LaBanda from "./components/LaBanda";
import Discografia from "./components/Discografia";
import Galeria from "./components/Galeria";
import Contacto from "./components/Contacto";


export default function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/labanda" element={<LaBanda />} />
        <Route path="/discografia" element={<Discografia />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />        
      </Routes>

      <Footer />
    </Router>
  );
}