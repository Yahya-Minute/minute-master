import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo.png';
import './navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false); // Track if scroll navbar should be visible
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState({ top: false, scroll: false }); // Track both menus in a single state

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY + 100 > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu for specific navbar (top or scroll)
  const toggleMobileMenu = (menuType) => {
    setIsMobileMenuOpen((prevState) => ({
      top: menuType === 'top' ? !prevState.top : false,
      scroll: menuType === 'scroll' ? !prevState.scroll : false,
    }));
  };

  const renderLinks = () => (
    <ul className="links">
      {/* Removed the 'Logo' text link */}
      <li><Link to="/language">AR/EN</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/driver">Driver</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><button className="signup-driver-min">Signup as Driver</button></li>
    </ul>
  );

  const renderMobileLinks = (menuType) => (
    <div className="links-container-mobile">
      {renderLinks().props.children.map((item, index) => (
        <li key={index} onClick={() => toggleMobileMenu(menuType)}>{item}</li>
      ))}
    </div>
  );

  return (
    <>
      {/* Initial top navbar */}
      <div className="navbar navbar-top">
        <div className="logo-min">
          {/* Wrap logo with Link for home navigation */}
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo-min-image" />
          </Link>
        </div>
        <div className="links-container-min">{renderLinks()}</div>
        <button className="menu-button" onClick={() => toggleMobileMenu('top')}>☰</button>
        {isMobileMenuOpen.top && renderMobileLinks('top')}
      </div>

      {/* Scroll navbar that appears on scroll */}
      <div className={`navbar navbar-scroll ${isVisible ? 'navbar-visible' : ''}`}>
        <div className="logo-min">
          {/* Wrap logo with Link for home navigation */}
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo-min-image" />
          </Link>
        </div>
        <div className="links-container-min">{renderLinks()}</div>
        <button className="menu-button" onClick={() => toggleMobileMenu('scroll')}>☰</button>
        {isMobileMenuOpen.scroll && renderMobileLinks('scroll')}
      </div>
    </>
  );
};

export default Navbar;
