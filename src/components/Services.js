import React, { useState, useEffect } from 'react';
import './Services.css';

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);
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

  const services = [
    {
      id: 1,
      title: "Motors & Pumps",
      description: "Premium quality motors and pumps with warranty. Fast delivery across India.",
      icon: "⚙️",
      mobileIcon: "🛍️",
      color: "#3498db",
      gradient: "linear-gradient(135deg, #3498db, #2980b9)",
      action: "Shop Now",
      type: "ecommerce",
      features: ["Free Installation", "1 Year Warranty", "24/7 Support"]
    },
    {
      id: 2,
      title: "Repair & Maintenance",
      description: "Expert technicians for all your repair needs. Scheduled maintenance plans available.",
      icon: "🔧",
      mobileIcon: "🛠️",
      color: "#2ecc71",
      gradient: "linear-gradient(135deg, #2ecc71, #27ae60)",
      action: "Book Now",
      type: "booking",
      features: ["Certified Experts", "Same Day Service", "Quality Guarantee"]
    },
    {
      id: 3,
      title: "Bore Drilling",
      description: "Professional borewell drilling services with advanced equipment and experienced team.",
      icon: "⛏️",
      mobileIcon: "💧",
      color: "#e67e22",
      gradient: "linear-gradient(135deg, #e67e22, #d35400)",
      action: "Get Quotes",
      type: "quotes",
      features: ["Free Site Inspection", "Modern Equipment", "Water Testing"]
    },
    {
      id: 4,
      title: "Electrical Works",
      description: "Certified electricians for residential and commercial electrical installations.",
      icon: "⚡",
      mobileIcon: "🔌",
      color: "#f39c12",
      gradient: "linear-gradient(135deg, #f39c12, #e67e22)",
      action: "Find Experts",
      type: "directory",
      features: ["Safety Certified", "Emergency Services", "Quality Materials"]
    }
  ];

  const handleCardClick = (serviceId) => {
    if (isMobile) {
      setActiveCard(activeCard === serviceId ? null : serviceId);
    }
  };

  const handleActionClick = (service, e) => {
    e.stopPropagation();
    alert(`${service.action} - ${service.title}`);
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
  <div className="section-badge">ElectroBore Services</div>
  <h2>Professional Borewell & Electrical Experts</h2>
  <p>Specialized in borewell drilling, submersible pump installation, and complete electrical solutions for agricultural and industrial needs</p>
</div>
        
        {/* 2x2 Grid for All Devices */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${activeCard === service.id ? 'active' : ''} ${isMobile ? 'mobile' : ''}`}
              data-type={service.type}
              onMouseEnter={() => !isMobile && setActiveCard(service.id)}
              onMouseLeave={() => !isMobile && setActiveCard(null)}
              onClick={() => handleCardClick(service.id)}
              style={{ '--delay': index * 0.1 + 's' }}
            >
              {/* Background Pattern */}
              <div className="card-pattern"></div>
              
              {/* Main Content */}
              <div className="service-content">
                <div className="service-header">
                  <div 
                    className="service-icon-container"
                    style={{ background: service.gradient }}
                  >
                    <span className="service-icon">
                      {isMobile ? service.mobileIcon : service.icon}
                    </span>
                    <div className="icon-glow"></div>
                  </div>
                  <div className="service-badge">Service {service.id}</div>
                </div>

                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  
                  <div className={`service-features ${isMobile && activeCard === service.id ? 'expanded' : ''}`}>
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="service-footer">
                  <button 
                    className="service-action-btn"
                    style={{ background: service.gradient }}
                    onClick={(e) => handleActionClick(service, e)}
                  >
                    <span>{service.action}</span>
                    <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  <div className="service-stats">
                    <div className="stat">
                      <span className="stat-number">24/7</span>
                      <span className="stat-label">Support</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">100+</span>
                      <span className="stat-label">Experts</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="card-overlay" style={{ background: service.gradient }}></div>

              {/* Mobile Expand Indicator */}
              {isMobile && (
                <div className="mobile-expand-indicator">
                  <span>{activeCard === service.id ? '▲' : '▼'}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Instructions */}
        {isMobile && (
          <div className="mobile-help">
            <p>💡 <strong>Tip:</strong> Tap on any service card to view details</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="services-cta">
          <p>Need help choosing the right service?</p>
          <button className="cta-button">
            Consult Our Experts
            <span className="cta-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;