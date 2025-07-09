import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Dom Pérignon Vintage 2012",
      price: 199.99,
      quantity: 1,
      image: "/api/placeholder/150/200",
      category: "champagne"
    },
    {
      id: 2,
      name: "Macallan 18 Year Single Malt",
      price: 599.99,
      quantity: 1,
      image: "/api/placeholder/150/200",
      category: "whiskey"
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(items =>
        items.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 99 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <span className="item-count">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Add some premium spirits and wines to get started!</p>
            <Link to="/" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              <div className="cart-items-header">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
                <span></span>
              </div>
              
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-product">
                    <Link to={`/product/${item.id}`} className="item-image">
                      <img src={item.image} alt={item.name} />
                    </Link>
                    <div className="item-details">
                      <Link to={`/product/${item.id}`} className="item-name">
                        {item.name}
                      </Link>
                      <span className="item-category">{item.category}</span>
                    </div>
                  </div>
                  
                  <div className="item-price">
                    ${item.price.toFixed(2)}
                  </div>
                  
                  <div className="item-quantity">
                    <div className="quantity-controls">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  
                  <div className="item-actions">
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="remove-btn"
                      title="Remove item"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-card">
                <h3>Order Summary</h3>
                
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="summary-row">
                  <span>Shipping:</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="free-shipping">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                <div className="summary-row">
                  <span>Tax:</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                {shipping > 0 && (
                  <div className="shipping-notice">
                    Add ${(99 - subtotal).toFixed(2)} more for free shipping!
                  </div>
                )}
                
                <button className="checkout-btn">
                  Proceed to Checkout
                </button>
                
                <div className="security-badges">
                  <span>🔒 SSL Secure Checkout</span>
                  <span>✓ Age Verification Required</span>
                </div>
              </div>
              
              <div className="continue-shopping">
                <Link to="/" className="continue-btn">
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Recommended Products */}
        <div className="recommended-section">
          <h2>You might also like</h2>
          <div className="recommended-products">
            <div className="recommended-item">
              <img src="/api/placeholder/200/250" alt="Recommended Product" />
              <h4>Caymus Cabernet Sauvignon</h4>
              <span className="price">$89.99</span>
              <button className="add-btn">Add to Cart</button>
            </div>
            <div className="recommended-item">
              <img src="/api/placeholder/200/250" alt="Recommended Product" />
              <h4>Grey Goose Vodka</h4>
              <span className="price">$39.99</span>
              <button className="add-btn">Add to Cart</button>
            </div>
            <div className="recommended-item">
              <img src="/api/placeholder/200/250" alt="Recommended Product" />
              <h4>Hennessy V.S Cognac</h4>
              <span className="price">$79.99</span>
              <button className="add-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;