import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryProductCard.css';

const CategoryProductCard = ({ product }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    
    if (hasHalfStar) {
      stars.push('☆');
    }
    
    while (stars.length < 5) {
      stars.push('☆');
    }
    
    return stars.join('');
  };

  return (
    <div className="category-product-card">
      <Link to={`/product/${product.id}`} className="category-product-link">
        <div className="category-product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="category-product-info">
          <h3 className="category-product-name">{product.name}</h3>
          <div className="category-product-size">{product.size}</div>
          <div className="category-product-rating">
            <span className="category-stars">{renderStars(product.rating)}</span>
            <span className="category-rating-count">{product.reviews} reviews</span>
          </div>
          <div className="category-product-price">
            {product.originalPrice && (
              <span className="category-original-price">${product.originalPrice}</span>
            )}
            <span className="category-price">${product.price}</span>
            {product.signInDiscount && (
              <div className="category-sign-in-discount">
                Sign In to Activate & Save ${product.signInDiscount}
              </div>
            )}
          </div>
        </div>
      </Link>
      
      <div className="category-availability">
        <div className="category-availability-item">
          <span className="availability-text">Pick Up Today</span>
          <span className="availability-status">In stock</span>
        </div>
        <div className="category-availability-item">
          <span className="availability-text">Delivery Available</span>
        </div>
      </div>
      
      <div className="category-product-actions">
        <button className="category-add-to-cart-btn">Add to Cart</button>
        <button className="category-wishlist-btn">♡</button>
      </div>
      
      <div className="category-more-like">
        <button className="category-more-like-btn">
          More Like This <span className="dropdown-arrow">▼</span>
        </button>
      </div>
    </div>
  );
};

export default CategoryProductCard;
