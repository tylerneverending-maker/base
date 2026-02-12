import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
          <div className="logo">blueTrestle <span className="highlight">Creative</span></div>
          <div 
            className={`menu-toggle ${isMenuOpen ? 'is-active' : ''}`} 
            id="mobile-menu"
            onClick={toggleMenu}
          >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
              <li><a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
      </nav>
    </header>
  )
}

export default Navbar