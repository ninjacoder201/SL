import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { theme } from '../styles/theme';
import './Header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Authentication state
  const navigate = useNavigate();

  // Check login state on component mount
  useEffect(() => {
    const loginState = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginState === 'true');
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Clear stored login data
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    // Navigate to home page
    navigate('/');
  };

  const categories = [
    { 
      id: 'wine', 
      name: 'Wine', 
      subcategories: [
        { title: 'Shop by Type', items: ['Red Wine', 'White Wine', 'Rosé', 'Sparkling & Champagne', 'Fortified Wine', 'Sweet & Dessert Wine'] },
        { title: 'By Region', items: ['French Wine', 'Italian Wine', 'Spanish Wine', 'California Wine', 'Australian Wine', 'German Wine'] },
        { title: 'Popular Brands', items: ['Kendall Jackson', 'Caymus', 'Silver Oak', 'Opus One', 'Dom Pérignon', 'La Crema'] }
      ]
    },
    { 
      id: 'spirits', 
      name: 'Spirits', 
      subcategories: [
        { title: 'Whiskey', items: ['Bourbon', 'Scotch', 'Irish Whiskey', 'Rye Whiskey', 'Japanese Whisky', 'Tennessee Whiskey'] },
        { title: 'Other Spirits', items: ['Vodka', 'Gin', 'Rum', 'Tequila', 'Cognac & Brandy', 'Liqueurs'] },
        { title: 'Premium Brands', items: ['Macallan', 'Johnnie Walker', 'Hennessy', 'Grey Goose', 'Patron', 'Bombay Sapphire'] }
      ]
    },
    { 
      id: 'beer', 
      name: 'Beer & Seltzers', 
      subcategories: [
        { title: 'Beer Limited-Time Specials', items: ['New & Trending', 'Kegs', 'THC-Infused', 'Beer Styles'] },
        { title: 'Shop All Kegs', items: ['1/2 Kegs', '1/4 Kegs', '1/6 Kegs'] },
        { title: 'Beer Categories', items: ['Ready to Drink', 'Hard Seltzers & Flavored Beverages', 'Novelty Drinks & Flavors', 'Craft Beer', 'Import Beer', 'Beer Accessories'] }
      ]
    },
    { 
      id: 'new', 
      name: 'New', 
      subcategories: [
        { title: 'New Arrivals', items: ['New Wines', 'New Spirits', 'New Beers', 'Seasonal Selections'] },
        { title: 'Trending Now', items: ['Staff Picks', 'Customer Favorites', 'Award Winners', 'Limited Editions'] }
      ]
    },
    { 
      id: 'gifts', 
      name: 'Gifts', 
      subcategories: [
        { title: 'Gift Ideas', items: ['Wine Gift Sets', 'Spirit Gift Sets', 'Corporate Gifts', 'Holiday Gifts'] },
        { title: 'Gift Cards', items: ['Digital Gift Cards', 'Physical Gift Cards', 'Corporate Gift Cards'] },
        { title: 'Accessories', items: ['Wine Glasses', 'Decanters', 'Bottle Openers', 'Wine Storage'] }
      ]
    }
  ];

  return (
    <header className="header">
      {/* Top Banner */}
      <div className="header-banner">
        <div className="container">
          <span>Free delivery on orders over $99 | Customer Care: 941-226-1593</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <Link to="/" className="logo">
              <h1>Speedy Liquor</h1>
              <span>Premium Spirits & Wine</span>
            </Link>

            {/* Search Bar */}
            <form className="search-form" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search for wine, spirits, beer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-btn">
                🔍
              </button>
            </form>

            {/* User Actions */}
            <div className="user-actions">
              <div className="location">
                <span>Pickup at</span>
                <strong>Bradenton, FL</strong>
              </div>
              
              <Link to="/cart" className="cart-link">
                🛒 Cart <span className="cart-count">0</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`main-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
        <div className="container">
          <div className="nav-container">
            <ul className="nav-list">
              {categories.map(category => (
                <li key={category.id} className="nav-item">
                  <Link to={`/category/${category.id}`} className="nav-link">
                    {category.name}
                  </Link>
                  <div className="dropdown">
                    <div className="dropdown-content">
                      <div className="dropdown-grid">
                        {category.subcategories.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="dropdown-section">
                            <h3 className="dropdown-section-title">{section.title}</h3>
                            <ul className="dropdown-section-list">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link 
                                    to={`/category/${category.id}/${item.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                    className="dropdown-link"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              <li className="nav-item">
                <Link to="/offers" className="nav-link special">
                  My Deals
                </Link>
              </li>
            </ul>
            
            {/* Authentication Buttons in Navigation */}
            <div className="nav-auth-buttons">
              {isLoggedIn ? (
                <>
                  <Link to="/account" className="nav-account-link">
                    My Account
                  </Link>
                  <button onClick={handleLogout} className="nav-logout-btn">
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/signin" className="nav-signin-btn">
                    Sign In
                  </Link>
                  <Link to="/signup" className="nav-signup-btn">
                    Create Account
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;