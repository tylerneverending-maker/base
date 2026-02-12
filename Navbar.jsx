import { useState, useEffect } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

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
              <li>
                <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Dark Mode">
                    {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
                </button>
              </li>
          </ul>
      </nav>
    </header>
  )
}

export default Navbar