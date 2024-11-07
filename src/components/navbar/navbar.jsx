import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink
import Logo from '../../assets/logo/logo.png';
import './navbar.css';
import Loader from '../../utility/loader/loader';

const Navbar = () => {
  const storedLanguage = localStorage.getItem('language') || 'en';
  const [language, setLanguage] = useState(storedLanguage);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Set direction and CSS class based on language
    const direction = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
    document.documentElement.classList.toggle('rtl', language === 'ar');
    document.documentElement.classList.toggle('ltr', language === 'en');
  }, [language]);

  const toggleLanguage = () => {
    setShowLoader(true);
    setTimeout(() => {
      const newLanguage = language === 'en' ? 'ar' : 'en';
      setLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
      window.location.reload(); // Reload to reapply language changes
    }, 100);
  };

  const reloadPage = () => {
    setShowLoader(true);
    setTimeout(() => {
      window.location.reload(); // Trigger reload on link click
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const renderLinks = () => (
    <ul className={`links ${language}`}>
      <li>
      <button onClick={() => { toggleLanguage(); reloadPage(); }} className="language-toggle-button">
  {language === 'en' ? 'عربي' : 'English'}
</button>

      </li>
      <li>
  <NavLink 
    to="/services" 
    className={({ isActive }) => (isActive ? "active-link" : "")} 
    onClick={reloadPage}
  >
    {language === 'en' ? 'Services' : 'الخدمات'}
  </NavLink>
</li>
<li>
  <NavLink 
    to="/driver" 
    className={({ isActive }) => (isActive ? "active-link" : "")} 
    onClick={reloadPage}
  >
    {language === 'en' ? 'Driver' : 'السائق'}
  </NavLink>
</li>
<li>
  <NavLink 
    to="/privacy" 
    className={({ isActive }) => (isActive ? "active-link" : "")} 
    onClick={reloadPage}
  >
    {language === 'en' ? 'Privacy' : 'الخصوصية'}
  </NavLink>
</li>
<li>
  <NavLink 
    to="/terms-and-conditions" 
    className={({ isActive }) => (isActive ? "active-link" : "")} 
    onClick={reloadPage}
  >
    {language === 'en' ? 'Terms & Conditions' : 'الشروط والأحكام'}
  </NavLink>
</li>

    </ul>
  );

  return (
    <>
      {showLoader && <Loader />}

      {/* Navbar Top */}
      <div className={`navbar navbar-top ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="logo-min">
          <NavLink to="/" onClick={reloadPage}>
            <img src={Logo} alt="Logo" className="logo-min-image" />
          </NavLink>
        </div>
        <div className="links-container-min">{renderLinks()}</div>
        <button className="menu-button" onClick={toggleMobileMenu}>☰</button>
        {isMobileMenuOpen && <div className="links-container-mobile">{renderLinks()}</div>}
      </div>

      {/* Scroll Navbar */}
      <div className={`navbar navbar-scroll ${isVisible ? 'navbar-visible' : ''}`}>
        <div className="logo-min">
          <NavLink to="/" onClick={reloadPage}>
            <img src={Logo} alt="Logo" className="logo-min-image" />
          </NavLink>
        </div>
        <div className="links-container-min">{renderLinks()}</div>
        <button className="menu-button" onClick={toggleMobileMenu}>☰</button>
        {isMobileMenuOpen && <div className="links-container-mobile">{renderLinks()}</div>}
      </div>
    </>
  );
};

export default Navbar;
