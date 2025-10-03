import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-nav') && !event.target.closest('.mobile-menu-btn')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '' },
    { id: 'categories', label: 'Categories', icon: '' },
    { id: 'cart', label: 'Cart', icon: '', badge: 2 },
    { id: 'bookings', label: 'Bookings', icon: '' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'login', label: 'Login/Signup', icon: '', isButton: true }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">⚡</div>
          <span className="logo-text">ElectroBore Hub</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.id} className={item.id === 'cart' ? 'cart-item' : ''}>
                <a 
                  href={`#${item.id}`}
                  className={`${item.id === activeLink ? 'active' : ''} ${item.isButton ? 'login-btn' : ''}`}
                  onClick={() => handleLinkClick(item.id)}
                >
                  {!item.isButton && <span className="nav-icon">{item.icon}</span>}
                  {item.label}
                  {item.badge && <span className="cart-badge">{item.badge}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          {/* Mobile Header */}
          <div className="mobile-nav-header">
            <div className="mobile-logo">
              <div className="logo-icon">⚡</div>
              <span className="logo-text">ElectroBore Hub</span>
            </div>
            <button className="close-menu-btn" onClick={toggleMenu} aria-label="Close menu">
              ✕
            </button>
          </div>

          {/* Navigation Items */}
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id} className={item.id === 'cart' ? 'cart-item' : ''}>
                <a 
                  href={`#${item.id}`}
                  className={`mobile-nav-link ${item.id === activeLink ? 'active' : ''} ${item.isButton ? 'login-btn' : ''}`}
                  onClick={() => handleLinkClick(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.label}</span>
                  {item.badge && <span className="cart-badge">{item.badge}</span>}
                  <span className="nav-arrow">›</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Footer */}
          <div className="mobile-nav-footer">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <div className="contact-label">Emergency Line</div>
                  <div className="contact-value">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <div>
                  <div className="contact-label">24/7 Available</div>
                  <div className="contact-value">Quick Response</div>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="WhatsApp">💬</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;