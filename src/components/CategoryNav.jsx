import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CategoryNav.css';

const CategoryNav = () => {
  const location = useLocation();

  const categories = [
    {
      id: 'wine',
      name: 'Wine',
      icon: '🍷',
      color: '#8b5cf6',
      subcategories: [
        { name: 'Red Wine', path: '/category/wine/red' },
        { name: 'White Wine', path: '/category/wine/white' },
        { name: 'Rosé', path: '/category/wine/rose' },
        { name: 'Sparkling', path: '/category/wine/sparkling' },
        { name: 'Dessert Wine', path: '/category/wine/dessert' }
      ]
    },
    {
      id: 'spirits',
      name: 'Spirits',
      icon: '🥃',
      color: '#f59e0b',
      subcategories: [
        { name: 'Whiskey', path: '/category/spirits/whiskey' },
        { name: 'Vodka', path: '/category/spirits/vodka' },
        { name: 'Rum', path: '/category/spirits/rum' },
        { name: 'Gin', path: '/category/spirits/gin' },
        { name: 'Tequila', path: '/category/spirits/tequila' },
        { name: 'Brandy', path: '/category/spirits/brandy' }
      ]
    },
    {
      id: 'beer',
      name: 'Beer',
      icon: '🍺',
      color: '#10b981',
      subcategories: [
        { name: 'Craft Beer', path: '/category/beer/craft' },
        { name: 'IPA', path: '/category/beer/ipa' },
        { name: 'Lager', path: '/category/beer/lager' },
        { name: 'Stout', path: '/category/beer/stout' },
        { name: 'Light Beer', path: '/category/beer/light' }
      ]
    },
    {
      id: 'champagne',
      name: 'Champagne',
      icon: '🥂',
      color: '#ef4444',
      subcategories: [
        { name: 'Dom Pérignon', path: '/category/champagne/dom-perignon' },
        { name: 'Veuve Clicquot', path: '/category/champagne/veuve-clicquot' },
        { name: 'Moët & Chandon', path: '/category/champagne/moet-chandon' },
        { name: 'Krug', path: '/category/champagne/krug' }
      ]
    },
    {
      id: 'sake',
      name: 'Sake & Asian',
      icon: '🍶',
      color: '#06b6d4',
      subcategories: [
        { name: 'Premium Sake', path: '/category/sake/premium' },
        { name: 'Junmai', path: '/category/sake/junmai' },
        { name: 'Soju', path: '/category/sake/soju' },
        { name: 'Asian Spirits', path: '/category/sake/asian-spirits' }
      ]
    },
    {
      id: 'accessories',
      name: 'Accessories',
      icon: '🍸',
      color: '#8b5cf6',
      subcategories: [
        { name: 'Wine Glasses', path: '/category/accessories/wine-glasses' },
        { name: 'Decanters', path: '/category/accessories/decanters' },
        { name: 'Wine Openers', path: '/category/accessories/openers' },
        { name: 'Bar Tools', path: '/category/accessories/bar-tools' }
      ]
    }
  ];

  const isActive = (categoryId) => {
    return location.pathname.includes(`/category/${categoryId}`);
  };

  return (
    <section className="category-nav">
      <div className="container">
        <h2 className="category-nav-title">Shop by Category</h2>
        <div className="category-nav-grid">
          {categories.map(category => (
            <div key={category.id} className="category-nav-item">
              <Link 
                to={`/category/${category.id}`}
                className={`category-nav-link ${isActive(category.id) ? 'active' : ''}`}
                style={{ '--category-color': category.color }}
              >
                <div className="category-nav-icon">
                  {category.icon}
                </div>
                <div className="category-nav-content">
                  <h3>{category.name}</h3>
                  <div className="subcategory-preview">
                    {category.subcategories.slice(0, 3).map((sub, index) => (
                      <span key={index} className="subcategory-item">
                        {sub.name}
                      </span>
                    ))}
                    {category.subcategories.length > 3 && (
                      <span className="subcategory-more">
                        +{category.subcategories.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
              
              {/* Dropdown for desktop */}
              <div className="category-dropdown">
                <div className="dropdown-header">
                  <span className="dropdown-icon">{category.icon}</span>
                  <h4>{category.name}</h4>
                </div>
                <div className="dropdown-grid">
                  {category.subcategories.map((sub, index) => (
                    <Link 
                      key={index}
                      to={sub.path}
                      className="dropdown-link"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
                <Link 
                  to={`/category/${category.id}`}
                  className="view-all-link"
                >
                  View All {category.name} →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Quick Links */}
        <div className="quick-links">
          <Link to="/deals" className="quick-link deals">
            🔥 Daily Deals
          </Link>
          <Link to="/new-arrivals" className="quick-link new">
            ✨ New Arrivals
          </Link>
          <Link to="/top-rated" className="quick-link rated">
            ⭐ Top Rated
          </Link>
          <Link to="/gift-sets" className="quick-link gifts">
            🎁 Gift Sets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryNav;