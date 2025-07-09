import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <h3>Speedy Liquor</h3>
              <p>Your premium destination for fine wines, spirits, and craft beers. Serving customers with quality and excellence since 1995.</p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Shop</h4>
              <ul>
                <li><Link to="/category/wine">Wine</Link></li>
                <li><Link to="/category/spirits">Spirits</Link></li>
                <li><Link to="/category/beer">Beer</Link></li>
                <li><Link to="/category/champagne">Champagne</Link></li>
                <li><Link to="/offers">Special Offers</Link></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="footer-section">
              <h4>Customer Service</h4>
              <ul>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/shipping">Shipping Info</Link></li>
                <li><Link to="/returns">Returns</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/track-order">Track Order</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Contact</h4>
              <div className="contact-info">
                <p>941-226-1593</p>
                <p>info@speedyliquor.com</p>
                <p>3006 1st St<br />Bradenton, FL 34205</p>
                <p>Mon-Sun: 9AM - 12AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Speedy Liquor. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/age-verification">Age Verification</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;