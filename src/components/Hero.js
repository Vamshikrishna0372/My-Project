// components/Hero.js
import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeService, setActiveService] = useState(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const popularSearches = [
    "Borewell Drilling",
    "Submersible Pump",
    "Motor Repair",
    "Electrical Wiring",
    "Water Treatment"
  ];

  const quickServices = [
    { name: "Emergency Repair", icon: "🚨", color: "#ff6b6b" },
    { name: "New Installation", icon: "⚙️", color: "#4fc3f7" },
    { name: "Maintenance", icon: "🔧", color: "#51cf66" },
    { name: "Consultation", icon: "💬", color: "#ffd43b" }
  ];

  const handleQuickService = (service) => {
    setActiveService(service);
    alert(`Selected: ${service.name}`);
  };

  return (
    <section className="hero">
      {/* Mobile Background Elements */}
      <div className="hero-bg-pattern"></div>
      {!isMobile && (
        <>
          <div className="hero-water-drop"></div>
          <div className="hero-spark"></div>
        </>
      )}
      
      <div className="container">
        <div className="hero-content">
          {/* Text Content - Always first on mobile */}
          <div className="hero-text">
            <div className="hero-badge">
              <span>⚡ Trusted Since 2010</span>
            </div>
            
            <h1>
              <span className="hero-title-main">ElectroBore Hub</span>
              <span className="hero-title-sub">
                {isMobile ? "Borewell & Electrical Experts" : "Your Complete Borewell & Electrical Solutions"}
              </span>
            </h1>
            
            <p className="hero-description">
              {isMobile 
                ? "Professional borewell drilling, motor repairs, and electrical services with 24/7 support."
                : "Professional borewell drilling, submersible pump installation, motor repairs, and electrical services with 24/7 support and guaranteed quality."
              }
            </p>

            {/* Mobile Quick Actions */}
            {isMobile && (
              <div className="mobile-quick-actions">
                <h3>Quick Services</h3>
                <div className="quick-services-grid">
                  {quickServices.map((service, index) => (
                    <button
                      key={index}
                      className={`quick-service-btn ${activeService?.name === service.name ? 'active' : ''}`}
                      style={{ '--service-color': service.color }}
                      onClick={() => handleQuickService(service)}
                    >
                      <span className="service-icon">{service.icon}</span>
                      <span className="service-name">{service.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Stats - Simplified on mobile */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">5000+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Success</span>
              </div>
            </div>

            {/* Search Section - Mobile Optimized */}
            <div className="search-section">
              <form onSubmit={handleSearch} className="search-container">
                <div className="search-box">
                  <div className="search-input-wrapper">
                    <input 
                      type="text" 
                      placeholder={isMobile ? "Search services..." : "Search borewell services, motors, repairs..."}
                      className="search-input"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="search-icon">🔍</div>
                  </div>
                  
                  {!isMobile && (
                    <button 
                      type="button"
                      className={`filter-btn ${isFilterOpen ? 'active' : ''}`}
                      onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                      <span className="filter-icon">⚙️</span>
                      <span className="filter-text">Filters</span>
                    </button>
                  )}
                  
                  <button type="submit" className="search-btn">
                    <span>Search</span>
                    {!isMobile && <span className="btn-arrow">→</span>}
                  </button>
                </div>

                {/* Mobile Filter Trigger */}
                {isMobile && (
                  <button 
                    type="button"
                    className="mobile-filter-trigger"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                  >
                    <span>⚙️ Advanced Filters</span>
                    <span>{isFilterOpen ? '▲' : '▼'}</span>
                  </button>
                )}

                {/* Filter Dropdown - Mobile Optimized */}
                {isFilterOpen && (
                  <div className={`filter-dropdown ${isMobile ? 'mobile' : ''}`}>
                    <div className="filter-header">
                      <h4>Filter Services</h4>
                      {isMobile && (
                        <button 
                          className="close-filters"
                          onClick={() => setIsFilterOpen(false)}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                    
                    <div className="filter-category">
                      <h5>Service Type</h5>
                      <div className="filter-options">
                        <label className="filter-option">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                          Borewell Drilling
                        </label>
                        <label className="filter-option">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                          Motor Installation
                        </label>
                        <label className="filter-option">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                          Electrical Works
                        </label>
                        <label className="filter-option">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                          Repair & Maintenance
                        </label>
                      </div>
                    </div>
                    
                    <div className="filter-category">
                      <h5>Location</h5>
                      <select className="location-select">
                        <option>Select Area</option>
                        <option>Urban</option>
                        <option>Rural</option>
                        <option>Industrial</option>
                      </select>
                    </div>
                    
                    <div className="filter-actions">
                      <button className="apply-filters">Apply Filters</button>
                      <button 
                        className="reset-filters"
                        onClick={() => setIsFilterOpen(false)}
                      >
                        {isMobile ? 'Cancel' : 'Reset'}
                      </button>
                    </div>
                  </div>
                )}
              </form>

              {/* Popular Searches - Mobile Optimized */}
              <div className="popular-searches">
                <span>Popular: </span>
                <div className="popular-tags">
                  {popularSearches.map((search, index) => (
                    <button 
                      key={index}
                      className="popular-tag"
                      onClick={() => setSearchQuery(search)}
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Call Buttons */}
            {isMobile && (
              <div className="mobile-action-buttons">
                <button className="call-btn primary">
                  📞 Call Now
                </button>
                <button className="call-btn secondary">
                  💬 WhatsApp
                </button>
              </div>
            )}
          </div>

          {/* Visual Content - Hidden on very small mobile */}
          <div className={`hero-visual ${isMobile ? 'mobile' : ''}`}>
            <div className="hero-image-container">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Borewell Drilling Equipment"
                className="hero-main-image"
              />
              
              {/* Floating Elements - Hidden on mobile */}
              {!isMobile && (
                <>
                  <div className="floating-card emergency">
                    <div className="card-icon">🚨</div>
                    <div className="card-content">
                      <strong>24/7 Emergency</strong>
                      <span>Quick Response</span>
                    </div>
                  </div>
                  
                  <div className="floating-card expert">
                    <div className="card-icon">👨‍🔧</div>
                    <div className="card-content">
                      <strong>Expert Team</strong>
                      <span>Certified Professionals</span>
                    </div>
                  </div>
                  
                  <div className="floating-card guarantee">
                    <div className="card-icon">✅</div>
                    <div className="card-content">
                      <strong>Quality Guarantee</strong>
                      <span>1 Year Warranty</span>
                    </div>
                  </div>
                </>
              )}

              {/* Mobile Service Tags */}
              {isMobile && (
                <div className="mobile-service-tags">
                  <span className="service-tag">💧 Borewell</span>
                  <span className="service-tag">⚡ Electrical</span>
                  <span className="service-tag">🔧 Repair</span>
                </div>
              )}

              {/* Animated Water Flow */}
              <div className="water-flow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      {isMobile && (
        <div className="mobile-bottom-bar">
          <button className="bottom-bar-btn">
            <span>🏠</span>
            <span>Home</span>
          </button>
          <button className="bottom-bar-btn">
            <span>🔍</span>
            <span>Search</span>
          </button>
          <button className="bottom-bar-btn primary">
            <span>📞</span>
            <span>Call</span>
          </button>
          <button className="bottom-bar-btn">
            <span>👤</span>
            <span>Profile</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;