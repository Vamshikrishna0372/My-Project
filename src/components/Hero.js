// components/Hero.js
import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Service mapping for search functionality
  const serviceMapping = {
    // Motors & Pumps related terms
    'motor': 'service-1',
    'pump': 'service-1',
    'motors': 'service-1',
    'pumps': 'service-1',
    'submersible': 'service-1',
    'installation': 'service-1',
    'warranty': 'service-1',
    'free installation': 'service-1',
    'shop': 'service-1',
    'shop now': 'service-1',
    
    // Repair & Maintenance related terms
    'repair': 'service-2',
    'maintenance': 'service-2',
    'service': 'service-2',
    'technician': 'service-2',
    'technicians': 'service-2',
    'certified': 'service-2',
    'expert': 'service-2',
    'book': 'service-2',
    'book now': 'service-2',
    'same day': 'service-2',
    
    // Bore Drilling related terms
    'bore': 'service-3',
    'borewell': 'service-3',
    'drilling': 'service-3',
    'bore drilling': 'service-3',
    'borewell drilling': 'service-3',
    'water': 'service-3',
    'inspection': 'service-3',
    'site inspection': 'service-3',
    'quotes': 'service-3',
    'get quotes': 'service-3',
    'water testing': 'service-3',
    
    // Electrical Works related terms
    'electrical': 'service-4',
    'electric': 'service-4',
    'wiring': 'service-4',
    'electrician': 'service-4',
    'electricians': 'service-4',
    'safety': 'service-4',
    'emergency': 'service-4',
    'find experts': 'service-4',
    'materials': 'service-4'
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      scrollToService(searchQuery.toLowerCase());
    }
  };

  const scrollToService = (query) => {
    // Find matching service based on search query
    let targetService = null;
    
    // Check for exact matches first
    Object.keys(serviceMapping).forEach(key => {
      if (query.includes(key)) {
        targetService = serviceMapping[key];
      }
    });

    if (targetService) {
      const serviceElement = document.getElementById(targetService);
      if (serviceElement) {
        serviceElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
        
        // Add highlight effect
        serviceElement.classList.add('service-highlight');
        setTimeout(() => {
          serviceElement.classList.remove('service-highlight');
        }, 2000);
      }
    } else {
      // If no specific service found, scroll to services section
      const servicesSection = document.getElementById('services-section');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const popularServices = [
    "Motors & Pumps",
    "Repair & Maintenance",
    "Bore Drilling",
    "Electrical Works",
    "Submersible Pump",
    "Motor Repair",
    "Electrical Wiring",
    "Generator Service"
  ];

  const serviceCategories = [
    { 
      name: "Motors & Pumps", 
      icon: "⚙️", 
      searchTerm: "motors pumps",
      targetId: "service-1"
    },
    { 
      name: "Repair & Maintenance", 
      icon: "🔧", 
      searchTerm: "repair maintenance",
      targetId: "service-2"
    },
    { 
      name: "Bore Drilling", 
      icon: "⛏️", 
      searchTerm: "bore drilling",
      targetId: "service-3"
    },
    { 
      name: "Electrical Works", 
      icon: "⚡", 
      searchTerm: "electrical works",
      targetId: "service-4"
    }
  ];

  const handleServiceClick = (service) => {
    setSearchQuery(service.searchTerm);
    // Don't scroll immediately when clicking category - wait for search button click
  };

  const handlePopularServiceClick = (service) => {
    setSearchQuery(service);
    // Don't scroll immediately when clicking popular service - wait for search button click
  };

  return (
    <section className="hero">
      {/* Animated Background Elements */}
      <div className="hero-bg-pattern"></div>
      <div className="hero-water-drop"></div>
      <div className="hero-spark"></div>
      <div className="hero-circuit"></div>
      
      <div className="container">
        <div className="hero-content">
          {/* Text Content */}
          <div className="hero-text">
            <div className="hero-badge">
              <span>⚡ Trusted Electrical & Borewell Experts</span>
            </div>
            
            <h1>
              <span className="hero-title-main">ElectroBore Solutions</span>
              <span className="hero-title-sub">
                {isMobile ? "Complete Borewell & Electrical Services" : "Complete Electrical & Borewell Services"}
              </span>
            </h1>
            
            <p className="hero-description">
              {isMobile 
                ? "Professional borewell drilling, motor repairs, and electrical services with 24/7 support."
                : "Professional borewell drilling, submersible pump installation, motor repairs, and comprehensive electrical services with 24/7 emergency support and quality guarantee."
              }
            </p>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">12+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Quality</span>
              </div>
            </div>

            {/* Search Section */}
            <div className="search-section">
              <form onSubmit={handleSearch} className="search-container">
                <div className="search-box">
                  <div className="search-input-wrapper">
                    <input 
                      type="text" 
                      placeholder={isMobile ? "Search services..." : "Search motors, pumps, electrical, repair, borewell..."}
                      className="search-input"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="search-icon">🔍</div>
                  </div>
                  
                  <button type="submit" className="search-btn">
                    <span>Search</span>
                    {!isMobile && <span className="btn-arrow">→</span>}
                  </button>
                </div>
              </form>

              {/* Popular Services - Mobile Optimized */}
              <div className="popular-searches">
                <span>{isMobile ? "Popular: " : "Popular Services: "}</span>
                <div className="popular-tags">
                  {popularServices.slice(0, isMobile ? 4 : 8).map((service, index) => (
                    <button 
                      key={index}
                      className="popular-tag"
                      onClick={() => handlePopularServiceClick(service)}
                    >
                      {isMobile ? service.split(' ')[0] : service}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Categories Grid - Mobile Optimized */}
            <div className="service-categories">
              <h3>{isMobile ? "Quick Access" : "Browse by Category"}</h3>
              <div className={`categories-grid ${isMobile ? 'mobile' : ''}`}>
                {serviceCategories.map((category, index) => (
                  <div 
                    key={index}
                    className="category-card"
                    onClick={() => handleServiceClick(category)}
                  >
                    <div className="category-icon">{category.icon}</div>
                    <span className="category-name">
                      {isMobile ? category.name.split(' ')[0] : category.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Content - Mobile Optimized */}
          <div className={`hero-visual ${isMobile ? 'mobile' : ''}`}>
            <div className="hero-image-container">
              <div className="main-image-wrapper">
                <img 
                  src={isMobile 
                    ? "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    : "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  }
                  alt="Electrical and Borewell Services"
                  className="hero-main-image"
                />
                <div className="image-overlay"></div>
              </div>
              
              {/* Floating Elements - Hidden on mobile */}
              {!isMobile && (
                <>
                  <div className="floating-card emergency">
                    <div className="card-icon">🚨</div>
                    <div className="card-content">
                      <strong>24/7 Emergency</strong>
                      <span>Quick Response Team</span>
                    </div>
                  </div>
                  
                  <div className="floating-card expert">
                    <div className="card-icon">👨‍🔧</div>
                    <div className="card-content">
                      <strong>Certified Experts</strong>
                      <span>Skilled Professionals</span>
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

              {/* Animated Elements */}
              <div className="animated-water-flow"></div>
              <div className="animated-spark"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>{isMobile ? "Scroll for services" : "Scroll to explore services"}</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
};

export default Hero;