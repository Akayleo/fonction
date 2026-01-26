import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch, FaTimes, FaShieldAlt, FaTruck, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import './styles.css';

const App = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('vendor');

  const testimonials = [
    { 
      quote: "Their customer service is superb. I called to make enquiries and they answered all my questions. Also, delivery was very fast.", 
      cite: "Agatha Maduwaye",
      img: "https://i.pravatar.cc/150?u=agatha" 
    },
    { 
      quote: "I was able to order and get my gas delivered in less than 30 minutes.", 
      cite: "Joseph Abefe-balogun",
      img: "https://i.pravatar.cc/150?u=joseph" 
    },
    { 
      quote: "Love the convenience of having cooking gas delivered right to my estate.", 
      cite: "Chioma Johnpaul",
      img: "https://i.pravatar.cc/150?u=chioma" 
    },
    { 
      quote: "Super easy to navigate and the support team is always there to help.", 
      cite: "Glory Pam",
      img: "https://i.pravatar.cc/150?u=glory" 
    },
    { 
      quote: "Quick and easy way to get gas delivered to my doorstep. Highly recommended.", 
      cite: "Pere Nduku",
      img: "https://i.pravatar.cc/150?u=pere" 
    },
    { 
      quote: "Thank you for the swift service. I got my gas in no time.", 
      cite: "Amidat Danesi",
      img: "https://i.pravatar.cc/150?u=amidat" 
    },
  ];

  const vendors = ["KingGas Station", "Morning Gas", "Supreme Gas", "GasLit Station", "QuickStop Mart", "Prime Power", "Little Caesars", "Sunset Grill"];
  const filteredVendors = vendors.filter(v => v.toLowerCase().includes(searchTerm.toLowerCase()));

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentTestimonial]);

 const [isOpen, setIsOpen] = useState(false);
  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">FONCTION</div>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#why-fonction" onClick={toggleMenu}>Features</a>
        <a href="#vendors" onClick={toggleMenu}>Vendors</a>
        <a href="#faq" onClick={toggleMenu}>FAQ</a>
        <button className="nav-cta" onClick={() => { openModal('vendor'); toggleMenu(); }}>
          Join Us
        </button>
      </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Energy Delivered <span className="highlight">Precisely</span></h1>
          <p className="hero-subtext">Buy Gas & Fuel easily, delivered to your doorstep. Trusted by over 1,500+ happy customers across the region.</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => document.getElementById('why-fonction')?.scrollIntoView({ behavior: 'smooth' })}>Get Started</button>
            <button className="btn-secondary">Download App</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" alt="Professional Delivery" />
        </div>
      </header>

      <main>
        {/* Features Section */}
        <section id="why-fonction" className="features">
          <div className="section-header">
            <h2>Why Choose Fonction?</h2>
            <p>We combine technology with reliability to fuel your home and business.</p>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <FaShieldAlt className="feature-icon" />
              <h3>Transparent Pricing</h3>
              <p>Real-time rates from verified vendors with zero hidden fees.</p>
            </div>
            <div className="feature-card">
              <FaTruck className="feature-icon" />
              <h3>Doorstep Delivery</h3>
              <p>Direct home delivery managed by our certified logistics network.</p>
            </div>
            <div className="feature-card">
              <FaMapMarkerAlt className="feature-icon" />
              <h3>Real-Time Tracking</h3>
              <p>Know exactly where your fuel is with our integrated GPS tracking.</p>
            </div>
            <div className="feature-card">
              <FaCheckCircle className="feature-icon" />
              <h3>Verified Partners</h3>
              <p>We only work with vetted fuel stations and certified gas vendors.</p>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="audience-section">
          <div className="section-header">
            <h2>Tailored Solutions</h2>
          </div>
          <div className="audience-grid">
            <div className="audience-card household">
              <div className="card-overlay">
                <h3>Households</h3>
                <p>Safe and swift cooking gas refills for your family.</p>
              </div>
            </div>
            <div className="audience-card corporate">
              <div className="card-overlay">
                <h3>Corporates</h3>
                <p>Scheduled bulk fuel deliveries for industrial operations.</p>
              </div>
            </div>
            <div className="audience-card business">
              <div className="card-overlay">
                <h3>Small Businesses</h3>
                <p>Keep your business running with on-demand energy supply.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Vendors */}
        <section id="vendors" className="vendors-section">
          <div className="search-box">
            <h2>Find Your Local Vendor</h2>
            <div className="input-wrapper">
              <FaSearch />
              <input 
                type="text" 
                placeholder="Search by station or vendor name..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="vendor-tags">
              {filteredVendors.map((vendor, i) => (
                <span key={i} className="vendor-tag">{vendor}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <div className="testimonial-container">
            <button className="slide-btn" onClick={prevTestimonial}>&#8592;</button>
            
            <div className="testimonial-card-wrapper">
              <div className="testimonial-content" key={currentTestimonial}>
                <div className="testimonial-avatar">
                  <img src={testimonials[currentTestimonial].img} alt={testimonials[currentTestimonial].cite} />
                </div>
                <p>"{testimonials[currentTestimonial].quote}"</p>
                <h4>{testimonials[currentTestimonial].cite}</h4>
              </div>
            </div>

            <button className="slide-btn" onClick={nextTestimonial}>&#8594;</button>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="faq-section">
          <h2>Got Questions?</h2>
          <div className="accordion">
            {[
              { q: "How do I purchase gas on the Fonction App?", a: "Download the app, select your gas type, choose a vendor, and place your order." },
              { q: "How do I know if the gas vendor delivers to my location?", a: "Enter your address in the app to see available vendors in your area." },
              { q: "Can I schedule gas deliveries?", a: "Yes, choose a delivery time during checkout." },
            ].map((faq, index) => (
              <div key={index} className={`accordion-item ${activeFaq === index ? 'active' : ''}`}>
                <div className="accordion-title" onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                  <span>{faq.q}</span>
                  {activeFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <div className="accordion-content"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section className="cta-banner">
          <h2>Ready to Partner with Fonction?</h2>
          <p>Join our growing network of vendors and riders.</p>
          <div className="cta-btns">
            <button onClick={() => openModal('vendor')}>Become a Vendor</button>
            <button onClick={() => openModal('rider')}>Become a Rider</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">FONCTION</div>
          <p>&copy; 2026 Fonction Energy. Empowering homes and businesses.</p>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowModal(false)}><FaTimes /></button>
            <h3>{modalType === 'vendor' ? 'Partner as a Vendor' : 'Apply as a Rider'}</h3>
            <p>Fill in your details and our team will contact you within 24 hours.</p>
            <form className="modal-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder={modalType === 'vendor' ? 'Business Name' : 'Phone Number'} required />
              <button type="submit" className="submit-btn">Send Application</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
