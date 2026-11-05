import { useState } from 'react';
import './Navbar.css';

const enlaces = [
  { href: '#sobre-mi', texto: 'Sobre mí' },
  { href: '#habilidades', texto: 'Habilidades' },
  { href: '#proyectos', texto: 'Proyectos' },
  { href: '#servicios', texto: 'Servicios' },
  { href: '#contacto', texto: 'Contacto' },
];

const Navbar = () => {
  // Estado: false = menú móvil cerrado, true = abierto
  const [abierto, setAbierto] = useState(false);
  const cerrarMenu = () => setAbierto(false);

  return (
    <nav className="navbar">
      <a href="#inicio" className="navbar-logo" onClick={cerrarMenu}>
        JC<span>.</span>Cumpally
      </a>

      <div className={`navbar-links ${abierto ? 'open' : ''}`}>
        {enlaces.map((enlace) => (
          <a key={enlace.href} href={enlace.href} onClick={cerrarMenu}>
            {enlace.texto}
          </a>
        ))}
      </div>

      <button
        type="button"
        className="navbar-toggle"
        aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={abierto}
        onClick={() => setAbierto(!abierto)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
