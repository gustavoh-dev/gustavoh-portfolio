import { useState } from 'react';

function Header({ email }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <div className="logo"><span></span>Portfolio</div>
      <nav>
        <a href="#projetos">Projetos</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </nav>
      <div className="header-actions">
        <a className="pill" href={`mailto:${email}`}>Disponível para projetos</a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          Menu
        </button>
      </div>
      {isOpen && (
        <div id="mobile-menu" className="mobile-nav">
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </div>
      )}
    </header>
  );
}

export default Header;
