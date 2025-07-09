import React from 'react';
import { Link } from 'react-router-dom';
import HomeProductCard from '../components/HomeProductCard';
import './Home.css';

const Home = () => {

  // Quick Picks Data
  const quickPicksProducts = [
    {
      id: 101,
      name: "Jack Daniels Black",
      price: 34.39,
      image: "https://i.ibb.co/TBPzRdxH/Screenshot-2025-07-09-at-14-44-37.png",
      rating: 5,
      reviews: 1076,
      size: "1.75L",
      category: "whiskey"
    },
    {
      id: 102,
      name: "Bombay Sapphire Gin",
      price: 31.99,
      image: "https://i.ibb.co/ym1cvP4G/Screenshot-2025-07-09-at-14-47-53.png",
      rating: 5,
      reviews: 901,
      size: "1.75L",
      category: "gin"
    },
    {
      id: 103,
      name: "Surfside Vodka Lemonade Variety",
      price: 14.49,
      image: "https://i.ibb.co/5XRfgmRD/Screenshot-2025-07-09-at-14-49-10.png",
      rating: 5,
      reviews: 49,
      size: "8pk-12oz Cans",
      category: "seltzers"
    },
    {
      id: 104,
      name: "Mi Familia Flores Cristalino Reposado Tequila",
      price: 59.99,
      image: "https://i.ibb.co/kV0w9jSL/Screenshot-2025-07-09-at-14-50-22.png",
      rating: 4,
      reviews: 753,
      size: "750ml",
      category: "tequila"
    },
    {
      id: 105,
      name: "Double Black Cabernet Sauvignon Paso Robles",
      price: 13.99,
      image: "https://i.ibb.co/q4TSLhQ/Screenshot-2025-07-09-at-14-51-26.png",
      rating: 4,
      reviews: 809,
      size: "750ml",
      category: "wine"
    },
    {
      id: 106,
      name: "Hennessy VS Cognac",
      price: 77.99,
      image: "https://i.ibb.co/HDSH3X1K/Screenshot-2025-07-09-at-14-52-10.png",
      rating: 5,
      reviews: 779,
      size: "1.75L",
      category: "cognac"
    },
    {
      id: 107,
      name: "Johnnie Walker Red Blended Scotch",
      price: 30.99,
      image: "https://i.ibb.co/rRypmgC2/Screenshot-2025-07-09-at-14-52-48.png",
      rating: 4,
      reviews: 542,
      size: "1.75L",
      category: "whiskey"
    }
  ];

  const categories = [
    { id: 'wine', name: 'Red Hot Summer Savings', icon: '🍷', description: 'Premium wines from around the world', image: 'https://i.ibb.co/fY9r7nNZ/a-luxurious-product-shot-advertisement-s-Qj-C0-feg-Q0-Wl-YZ4-Wl-Jjf0w-TYoojyc8-Tb-Ou952by1-Tbrw.jpg' },
    { id: 'beer', name: '$2 off Beer and Seltzers', icon: '🍺', description: 'Craft beers and popular brands', image: 'https://i.ibb.co/nMkkJ4KK/create-a-background-with-a-beach-and-oce-1-b-Mr-YRz-CGKt-Hc-Hai6gw-Qngm-P6-o-Q-u-Ry-E9s-Kg-Lqwg.jpg' },
    { id: 'spirits', name: 'Made by Caymus', icon: '🥃', description: 'Fine whiskeys, vodkas, and more', image: 'https://i.ibb.co/tMRWM7gy/a-photograph-of-two-bottles-of-premium-r-Ic-Xb-V6-IERC6fk-Q7ii-Ztqq-Q-o-TLk-Pi-Wa-SA6-J9-Z0p-Kjy-V1w.jpg' },
    { id: 'champagne', name: 'Summer Hot List', icon: '🥂', description: 'Luxury champagnes and sparkling wines', image: 'https://i.ibb.co/49s30yb/a-photograph-of-a-chilled-bottle-of-tito-ZVMNy-n-DTs-KKX-Rgb6-VV5w-Opm5y5-Ag-Rial-PYU-Wnlhh-Q.jpg' },
    { id: 'new', name: 'New Arrivals', icon: '⭐', description: 'Latest additions to our collection', image: 'https://i.ibb.co/21YWdKny/Screenshot-2025-07-09-at-12-32-19-PM.png' },
    { id: 'cocktails', name: 'Cocktail Essentials', icon: '🍸', description: 'Everything for perfect cocktails', image: 'https://i.ibb.co/9k4S3VBR/Screenshot-2025-07-09-at-1-03-40-PM.png' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-banner">
            <div className="hero-image">
              <img src="https://i.ibb.co/Kz3g9crS/Screenshot-2025-07-09-at-12-29-53-PM.png" alt="Digital Coupon Event" />
            </div>
          </div>
        </div>
      </section>

      {/* Trending Now Section */}
      <section className="category-section">
        <div className="container">
          <div className="section-header">
            <h2>Trending Now</h2>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <Link to={`/category/${category.id}`} key={category.id} className="category-item">
                <div className="category-circle">
                  <img src={category.image} alt={category.name} />
                </div>
                <h3>{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="deals-section">
        <div className="container">
          <div className="section-header">
            <h2>Deals</h2>
          </div>
          <div className="deals-grid">
            {/* Digital Deals Event */}
            <div className="deal-card custom-image">
              <img src="https://i.ibb.co/7tc8psbD/Screenshot-2025-07-09-at-14-39-47.png" alt="Digital Deals Event" />
            </div>
            
            {/* July Limited-Time Specials */}
            <div className="deal-card custom-image with-button">
              <img src="https://i.ibb.co/chrVYRfN/a-photograph-of-a-pristine-beach-with-tu-Nconyp3-UTem-Nz-Zpf-HSlj-g-Qngm-P6-o-Q-u-Ry-E9s-Kg-Lqwg.jpg" alt="July Limited-Time Specials" />
              <button className="overlay-button">Summer Deals</button>
            </div>
            
            {/* Custom Deal Image */}
            <div className="deal-card custom-image">
              <img src="https://i.ibb.co/3yWNgJBR/Screenshot-2025-07-09-at-12-37-12-PM.png" alt="Special Deal" />
            </div>
          </div>
          
          {/* Trending Flavor Banner */}
          <div className="trending-flavor-banner">
            <div className="trending-content">
              <div className="trending-text">
                <div className="trending-badge">TRENDING FLAVOR</div>
                <h3>Trending Now: Bad Bull Spicy Tamarindo Tequila</h3>
                <p>Blanco Tequila with a sweet, savory and spicy kick!</p>
                <button className="trending-cta">Shop Bad Bull Tequila</button>
              </div>
              <div className="trending-image">
                <img src="https://i.ibb.co/21YWdKny/Screenshot-2025-07-09-at-12-32-19-PM.png" alt="Bad Bull Spicy Tamarindo Tequila" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Picks Section */}
      <section className="quick-picks-section">
        <div className="container">
          <div className="section-header">
            <h2>Quick Picks</h2>
          </div>
          <div className="quick-picks-grid">
            {quickPicksProducts.map(product => (
              <HomeProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Get exclusive offers, new arrivals, and expert wine tips</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;