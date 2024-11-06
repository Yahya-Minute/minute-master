import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo.png';
import './navbar.css';

const Navbar = () => {
  // Check localStorage for stored language on initial load, default is 'en'
  const storedLanguage = localStorage.getItem('language') || 'en';
  const [language, setLanguage] = useState(storedLanguage);

  const [isVisible, setIsVisible] = useState(false); // Track if scroll navbar should be visible
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState({ top: false, scroll: false }); // Track both menus in a single state

  // Toggle language and apply RTL/LTR classes
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);

    // Store language in localStorage
    localStorage.setItem('language', newLanguage);

    // Change body class based on language
    document.documentElement.classList.toggle('rtl', newLanguage === 'ar');
    document.documentElement.classList.toggle('ltr', newLanguage === 'en');
    
    // Optionally, you can force page reload or other dynamic behavior if needed
    window.location.reload(); // Page reload (will reset to homepage)
  };

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

  // Custom function to reload page on link click
  const handleLinkClick = (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Get the current link href and reload the page at that URL
    const targetUrl = event.target.getAttribute('href');
    window.location.href = targetUrl; // Reload page at the current URL
  };

  const renderLinks = () => (
    <ul className="links">
      {/* Language toggle button */}
      <li>
        <button onClick={toggleLanguage} className="language-toggle-button">
          {language === 'en' ? 'AR' : 'EN'}
        </button>
      </li>
      <li><Link to="/services" onClick={handleLinkClick}>{language === 'en' ? 'Services' : 'الخدمات'}</Link></li>
      <li><Link to="/driver" onClick={handleLinkClick}>{language === 'en' ? 'Driver' : 'السائق'}</Link></li>
      <li><Link to="/terms-and-conditions" onClick={handleLinkClick}>{language === 'en' ? 'Terms & Conditions' : 'الشروط والأحكام'}</Link></li>
      <li><button className="signup-driver-min">{language === 'en' ? 'Signup as Driver' : 'التسجيل كسائق'}</button></li>
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
