import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
      window.location.reload();
    }, 100);
  };

  const reloadPage = () => {
    setShowLoader(true);
    setTimeout(() => {
      window.location.reload();
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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const renderLinks = () => (
    <ul className={`links ${language}`}>
      <li>
        <button onClick={() => { toggleLanguage(); reloadPage(); }} className="language-toggle-button">
          {language === 'en' ? 'عربي' : 'English'}
        </button>
      </li>
      <li>
        <NavLink to="/services" onClick={reloadPage} className={({ isActive }) => (isActive ? 'active-link' : '')}>
          {language === 'en' ? 'Services' : 'الخدمات'}
        </NavLink>
      </li>
      <li>
        <NavLink to="/driver" onClick={reloadPage} className={({ isActive }) => (isActive ? 'active-link' : '')}>
          {language === 'en' ? 'Driver' : 'السائق'}
        </NavLink>
      </li>
      <li>
        <NavLink to="/privacy" onClick={reloadPage} className={({ isActive }) => (isActive ? 'active-link' : '')}>
          {language === 'en' ? 'Privacy' : 'الخصوصية'}
        </NavLink>
      </li>
      <li>
        <NavLink to="/terms-and-conditions" onClick={reloadPage} className={({ isActive }) => (isActive ? 'active-link' : '')}>
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
      </div>

      {/* Navbar Scroll */}
      <div className={`navbar navbar-scroll ${isVisible ? 'navbar-visible' : ''} ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="logo-min">
          <NavLink to="/" onClick={reloadPage}>
            <img src={Logo} alt="Logo" className="logo-min-image" />
          </NavLink>
        </div>
        <div className="links-container-min">{renderLinks()}</div>
        <button className="menu-button" onClick={toggleMobileMenu}>☰</button>
      </div>

      {/* Mobile Menu Popup */}
      <div className={`links-container-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="menu-button-close" onClick={closeMobileMenu}>✕</button>
        {renderLinks()}
      </div>
    </>
  );
};

export default Navbar;
