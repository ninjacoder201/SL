import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategoryProductCard from '../components/CategoryProductCard';
import './Category.css';

const Category = () => {
  const { id, subcategory } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');
  const [itemsPerPage, setItemsPerPage] = useState(24);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedFilters, setSelectedFilters] = useState({});

  // Mock data for products
  useEffect(() => {
    const mockProducts = {
      wine: [
        {
          id: 1,
          name: "Caymus Cabernet Sauvignon 2021",
          price: 89.99,
          originalPrice: 109.99,
          image: "/api/placeholder/300/400",
          rating: 4.7,
          reviews: 256,
          category: "wine",
          subCategory: "red",
          brand: "Caymus",
          badge: "WINERY DIRECT",
          description: "Rich, full-bodied Cabernet with notes of blackberry and vanilla",
          size: "750ml",
          availability: "In Stock",
          pickupAvailable: true,
          deliveryAvailable: true
        },
        {
          id: 2,
          name: "Kendall-Jackson Vintner's Reserve Chardonnay",
          price: 24.99,
          image: "/api/placeholder/300/400",
          rating: 4.4,
          reviews: 189,
          category: "wine",
          subCategory: "white",
          brand: "Kendall-Jackson",
          description: "Crisp, elegant Chardonnay with tropical fruit flavors",
          size: "750ml",
          availability: "In Stock",
          pickupAvailable: true,
          deliveryAvailable: true,
          signInDiscount: 4
        },
        {
          id: 3,
          name: "Opus One 2019",
          price: 449.99,
          image: "/api/placeholder/300/400",
          rating: 4.9,
          reviews: 89,
          category: "wine",
          subCategory: "red",
          brand: "Opus One",
          badge: "Premium",
          description: "Bordeaux-style blend from Napa Valley",
          size: "750ml",
          availability: "Limited",
          pickupAvailable: true,
          deliveryAvailable: false
        }
      ],
      beer: [
        {
          id: 4,
          name: "Schilling Excelsior Hard Cider",
          price: 15.49,
          image: "/api/placeholder/300/400",
          rating: 4.8,
          reviews: 15,
          category: "beer",
          subCategory: "cider",
          brand: "Schilling",
          description: "6pk-12oz Cans",
          size: "6pk-12oz Cans",
          availability: "In Stock",
          pickupAvailable: true,
          deliveryAvailable: true
        },
        {
          id: 5,
          name: "Woodchuck Amber Draft Cider",
          price: 13.49,
          image: "/api/placeholder/300/400",
          rating: 4.6,
          reviews: 25,
          category: "beer",
          subCategory: "cider",
          brand: "Woodchuck",
          description: "6pk-12oz Btls",
          size: "6pk-12oz Btls",
          availability: "In Stock",
          pickupAvailable: true,
          deliveryAvailable: true
        },
        {
          id: 6,
          name: "1911 Rose Hard Cider",
          price: 14.99,
          image: "/api/placeholder/300/400",
          rating: 4.2,
          reviews: 7,
          category: "beer",
          subCategory: "cider",
          brand: "1911",
          description: "4pk-16oz Cans",
          size: "4pk-16oz Cans",
          availability: "In Stock",
          pickupAvailable: true,
          deliveryAvailable: true
        }
      ],
      spirits: [
        {
          id: 7,
          name: "Macallan 18 Year Single Malt",
          price: 589.99,
          image: "/api/placeholder/300/400",
          rating: 4.9,
          reviews: 145,
          category: "spirits",
          subCategory: "whiskey",
          brand: "Macallan",
          badge: "Premium",
          description: "Exceptional single malt with rich sherry cask influence",
          size: "750ml",
          availability: "Limited",
          pickupAvailable: true,
          deliveryAvailable: false
        }
      ]
    };

    // Simulate loading
    setTimeout(() => {
      setProducts(mockProducts[id] || []);
      setLoading(false);
    }, 500);
  }, [id, subcategory]);

  const categoryInfo = {
    wine: {
      title: "Wine",
      filters: {
        type: ["Red Wine", "White Wine", "Rosé", "Sparkling & Champagne", "Fortified Wine", "Sweet & Dessert Wine"],
        region: ["French Wine", "Italian Wine", "Spanish Wine", "California Wine", "Australian Wine", "German Wine"],
        brand: ["Kendall Jackson", "Caymus", "Silver Oak", "Opus One", "Dom Pérignon", "La Crema"],
        price: ["Under $20", "$20-$50", "$50-$100", "Over $100"],
        rating: ["4+ Stars", "3+ Stars", "2+ Stars"],
        availability: ["In Stock", "Limited"]
      }
    },
    beer: {
      title: "Cider",
      filters: {
        type: ["Hard Cider", "Fruit Cider", "Dry Cider", "Sweet Cider"],
        brand: ["Schilling", "Woodchuck", "1911", "Angry Orchard"],
        price: ["Under $15", "$15-$25", "$25-$40", "Over $40"],
        rating: ["4+ Stars", "3+ Stars", "2+ Stars"],
        availability: ["In Stock", "Limited"]
      }
    },
    spirits: {
      title: "Spirits",
      filters: {
        type: ["Bourbon", "Scotch", "Irish Whiskey", "Rye Whiskey", "Japanese Whisky", "Tennessee Whiskey", "Vodka", "Gin", "Rum", "Tequila", "Cognac & Brandy", "Liqueurs"],
        brand: ["Macallan", "Johnnie Walker", "Hennessy", "Grey Goose", "Patron", "Bombay Sapphire"],
        price: ["Under $30", "$30-$80", "$80-$200", "Over $200"],
        rating: ["4+ Stars", "3+ Stars", "2+ Stars"],
        availability: ["In Stock", "Limited"]
      }
    }
  };

  const currentCategory = categoryInfo[id] || categoryInfo.wine;

  // Initialize selectedFilters based on current category
  useEffect(() => {
    const initialFilters = {};
    Object.keys(currentCategory.filters).forEach(filterType => {
      initialFilters[filterType] = [];
    });
    setSelectedFilters(initialFilters);
  }, [id, subcategory]);

  const filteredProducts = products.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: (prev[filterType] || []).includes(value)
        ? (prev[filterType] || []).filter(item => item !== value)
        : [...(prev[filterType] || []), value]
    }));
  };

  const clearAllFilters = () => {
    const initialFilters = {};
    Object.keys(currentCategory.filters).forEach(filterType => {
      initialFilters[filterType] = [];
    });
    setSelectedFilters(initialFilters);
    setPriceRange([0, 1000]);
  };

  return (
    <div className="category-page">
      {/* Promotional Banner */}
      <div className="promo-banner">
        <div className="container">
          <h2>$2 off 4 or 6 pack Beer & Seltzer</h2>
          <a href="#" className="promo-link">Beer Offer Details</a>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <a href="/">Home</a>
          <span className="separator">/</span>
          <a href="/beer">Beer</a>
          <span className="separator">/</span>
          <span className="current">{currentCategory.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="category-layout">
        <div className="container">
          <div className="category-header">
            <h1>{currentCategory.title}</h1>
            <p className="results-count">1 - {Math.min(itemsPerPage, sortedProducts.length)} of {sortedProducts.length} results</p>
          </div>

          <div className="category-content">
            {/* Left Sidebar - Filters */}
            <aside className="filters-sidebar">
              <div className="filter-section">
                <h3>Shopping Method</h3>
                <div className="filter-options">
                  <label className="filter-option">
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark"></span>
                    Pick Up
                  </label>
                  <div className="sub-options">
                    <label className="filter-option sub-option">
                      <input type="radio" name="pickup" defaultChecked />
                      <span className="radio-mark"></span>
                      Bradenton, FL
                    </label>
                    <label className="filter-option sub-option">
                      <input type="radio" name="pickup" />
                      <span className="radio-mark"></span>
                      All Stores
                    </label>
                  </div>
                  <label className="filter-option">
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark"></span>
                    Deliver to 34205
                  </label>
                  <label className="filter-option">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Ship to Florida
                  </label>
                </div>
              </div>

              <div className="filter-section">
                <h3>Product Availability</h3>
                <div className="filter-options">
                  <label className="filter-option">
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark"></span>
                    Include In-Store Purchase Only Items
                  </label>
                  <label className="filter-option">
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark"></span>
                    Include Out of Stock Items
                  </label>
                </div>
              </div>

              {/* Dynamic Filter Groups */}
              {Object.entries(currentCategory.filters).map(([filterType, options]) => (
                <div key={filterType} className="filter-section">
                  <h3>{filterType.charAt(0).toUpperCase() + filterType.slice(1)}</h3>
                  <div className="filter-options">
                    {options.map(option => (
                      <label key={option} className="filter-option">
                        <input
                          type="checkbox"
                          checked={(selectedFilters[filterType] || []).includes(option)}
                          onChange={() => handleFilterChange(filterType, option)}
                        />
                        <span className="checkmark"></span>
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              {/* Price Range */}
              <div className="filter-section">
                <h3>Price Range</h3>
                <div className="price-range-inputs">
                  <div className="price-input-group">
                    <span>Min.</span>
                    <input type="number" placeholder="$0" min="0" />
                  </div>
                  <span className="price-separator">to</span>
                  <div className="price-input-group">
                    <span>Max.</span>
                    <input type="number" placeholder="$0" min="0" />
                  </div>
                  <button className="price-go-btn">Go</button>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="products-main">
              {/* Controls Bar */}
              <div className="controls-bar">
                <div className="controls-left">
                  <div className="items-per-page">
                    <label>Items per page</label>
                    <select 
                      value={itemsPerPage} 
                      onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    >
                      <option value={24}>24 Items</option>
                      <option value={48}>48 Items</option>
                      <option value={96}>96 Items</option>
                    </select>
                  </div>
                  <div className="sort-options">
                    <label>Sort</label>
                    <select 
                      value={sortBy} 
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="relevance">Relevance</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Customer Rating</option>
                      <option value="name">Name</option>
                    </select>
                  </div>
                </div>
                <div className="controls-right">
                  <div className="view-toggle">
                    <button 
                      className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                      onClick={() => setViewMode('grid')}
                    >
                      <span className="grid-icon">⊞</span>
                    </button>
                    <button 
                      className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                      onClick={() => setViewMode('list')}
                    >
                      <span className="list-icon">☰</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className={`products-grid ${viewMode}`}>
                {sortedProducts.slice(0, itemsPerPage).map(product => (
                  <CategoryProductCard key={product.id} product={product} />
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
