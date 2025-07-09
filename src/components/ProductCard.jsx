import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, viewMode = 'grid' }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Added ${product.name} to cart`);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="star">★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="star">☆</span>);
      } else {
        stars.push(<span key={i} className="star empty">☆</span>);
      }
    }
    
    return stars;
  };

  const getPackInfo = () => {
    if (product.size) {
      if (product.size.includes('pk')) {
        const match = product.size.match(/(\d+)pk/);
        return match ? { number: match[1], text: 'Pack' } : null;
      }
    }
    return null;
  };

  const packInfo = getPackInfo();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          {packInfo && (
            <div className="product-pack-info">
              <div className="pack-number">{packInfo.number}</div>
              <div className="pack-text">{packInfo.text}</div>
            </div>
          )}
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-size">{product.size || '750ml'}</p>
          
          <div className="product-rating">
            <div className="star-rating">
              {renderStars(product.rating)}
            </div>
            <span className="rating-count">{product.reviews} reviews</span>
          </div>
          
          <div className="product-price">
            <p className="price">${product.price}</p>
          </div>

          <div className="availability-info">
            <div className={`availability-item ${product.pickupAvailable ? '' : 'unavailable'}`}>
              <span>Pick Up Today</span>
              <span>{product.pickupAvailable ? 'In stock' : 'Out of stock'}</span>
            </div>
            <div className={`availability-item ${product.deliveryAvailable ? '' : 'unavailable'}`}>
              <span>Delivery Available</span>
            </div>
          </div>
        </div>
      </Link>
      
      <div className="product-actions">
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button 
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`} 
          onClick={handleWishlist}
          aria-label="Add to wishlist"
        >
          ♡
        </button>
      </div>
      
      <button className="more-like-btn">
        More Like This ▼
      </button>
    </div>
  );
};

export default ProductCard;