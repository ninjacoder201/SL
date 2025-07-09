import React from 'react';
import { Link } from 'react-router-dom';
import './HomeProductCard.css';

const HomeProductCard = ({ product }) => {
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
    <div className="home-product-card">
      <Link to={`/product/${product.id}`} className="home-product-link">
        <div className="home-product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="home-product-info">
          <h3 className="home-product-name">{product.name}</h3>
          <div className="home-product-size">{product.size}</div>
          <div className="home-product-rating">
            <span className="home-stars">{renderStars(product.rating)}</span>
            <span className="home-rating-count">({product.reviews})</span>
          </div>
          <div className="home-product-price">
            {product.originalPrice && (
              <span className="home-original-price">${product.originalPrice}</span>
            )}
            <span className="home-price">${product.price}</span>
          </div>
        </div>
      </Link>
      <div className="home-product-actions">
        <button className="home-add-to-cart-btn">Add To Cart</button>
      </div>
    </div>
  );
};

export default HomeProductCard;
