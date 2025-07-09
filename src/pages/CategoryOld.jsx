import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
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
          description: "Rich, full-bodied Cabernet with notes of blackberry and vanilla"
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
          description: "Crisp, elegant Chardonnay with tropical fruit flavors"
        },
        {
          id: 3,
          name: "Opus One 2019",
          price: 449.99,
          image: "/api/placeholder/300/400",
          rating: 4.9,
          reviews: 67,
          category: "wine",
          subCategory: "red",
          brand: "Opus One",
          badge: "Exclusive",
          description: "Legendary Napa Valley blend, a masterpiece of winemaking"
        },
        {
          id: 4,
          name: "Whispering Angel Rosé",
          price: 19.99,
          image: "/api/placeholder/300/400",
          rating: 4.3,
          reviews: 324,
          category: "wine",
          subCategory: "rose",
          brand: "Whispering Angel",
          description: "Provence rosé with delicate floral notes and crisp finish"
        },
        {
          id: 5,
          name: "Dom Pérignon Vintage 2012",
          price: 299.99,
          originalPrice: 349.99,
          image: "/api/placeholder/300/400",
          rating: 4.9,
          reviews: 124,
          category: "wine",
          subCategory: "champagne",
          brand: "Dom Pérignon",
          badge: "WINERY DIRECT",
          description: "Prestigious champagne with complex flavors and fine bubbles"
        }
      ],
      spirits: [
        {
          id: 6,
          name: "Macallan 18 Year Single Malt",
          price: 599.99,
          image: "/api/placeholder/300/400",
          rating: 4.9,
          reviews: 89,
          category: "spirits",
          subCategory: "whiskey",
          brand: "Macallan",
          badge: "Premium",
          description: "Exceptional single malt with rich sherry cask influence"
        },
        {
          id: 7,
          name: "Grey Goose Vodka",
          price: 39.99,
          originalPrice: 49.99,
          image: "/api/placeholder/300/400",
          rating: 4.5,
          reviews: 432,
          category: "spirits",
          subCategory: "vodka",
          brand: "Grey Goose",
          description: "Premium French vodka with smooth, clean taste"
        },
        {
          id: 8,
          name: "Hennessy V.S Cognac",
          price: 79.99,
          image: "/api/placeholder/300/400",
          rating: 4.6,
          reviews: 178,
          category: "spirits",
          subCategory: "cognac",
          brand: "Hennessy",
          badge: "Popular",
          description: "Classic cognac with warm spice and fruit notes"
        },
        {
          id: 9,
          name: "Johnnie Walker Blue Label",
          price: 189.99,
          image: "/api/placeholder/300/400",
          rating: 4.8,
          reviews: 234,
          category: "spirits",
          subCategory: "scotch",
          brand: "Johnnie Walker",
          badge: "Premium",
          description: "Luxury blended Scotch whisky with unparalleled smoothness"
        }
      ],
      beer: [
        {
          id: 10,
          name: "Pliny the Elder IPA",
          price: 12.99,
          image: "/api/placeholder/300/400",
          rating: 4.8,
          reviews: 156,
          category: "beer",
          subCategory: "ipa",
          brand: "Russian River",
          badge: "Craft",
          description: "Legendary double IPA with intense hop character"
        },
        {
          id: 11,
          name: "Guinness Stout",
          price: 8.99,
          image: "/api/placeholder/300/400",
          rating: 4.3,
          reviews: 289,
          category: "beer",
          subCategory: "stout",
          brand: "Guinness",
          description: "Iconic Irish stout with creamy texture and roasted flavor"
        },
        {
          id: 12,
          name: "Corona Extra",
          price: 18.99,
          image: "/api/placeholder/300/400",
          rating: 4.1,
          reviews: 445,
          category: "beer",
          subCategory: "lager",
          brand: "Corona",
          description: "Light, crisp Mexican lager perfect for any occasion"
        }
      ],
      champagne: [
        {
          id: 13,
          name: "Dom Pérignon Vintage 2012",
          price: 299.99,
          originalPrice: 349.99,
          image: "/api/placeholder/300/400",
          rating: 4.9,
          reviews: 124,
          category: "champagne",
          brand: "Dom Pérignon",
          badge: "Best Seller",
          description: "Prestigious champagne with complex flavors and fine bubbles"
        },
        {
          id: 14,
          name: "Veuve Clicquot Brut",
          price: 59.99,
          image: "/api/placeholder/300/400",
          rating: 4.6,
          reviews: 203,
          category: "champagne",
          brand: "Veuve Clicquot",
          description: "Classic champagne with vibrant acidity and citrus notes"
        }
      ],
      new: [
        {
          id: 15,
          name: "2024 Vintage Reserve Cabernet",
          price: 129.99,
          image: "/api/placeholder/300/400",
          rating: 4.7,
          reviews: 45,
          category: "new",
          subCategory: "wine",
          brand: "Napa Valley Reserve",
          badge: "NEW",
          description: "Limited release from premium Napa Valley vineyard"
        },
        {
          id: 16,
          name: "Artisan Craft Gin",
          price: 69.99,
          image: "/api/placeholder/300/400",
          rating: 4.5,
          reviews: 23,
          category: "new",
          subCategory: "spirits",
          brand: "Distillery Select",
          badge: "NEW",
          description: "Small-batch gin with botanicals from around the world"
        }
      ],
      gifts: [
        {
          id: 17,
          name: "Premium Wine Gift Set",
          price: 149.99,
          image: "/api/placeholder/300/400",
          rating: 4.8,
          reviews: 89,
          category: "gifts",
          subCategory: "wine-set",
          brand: "Speedy Liquor",
          badge: "Gift Set",
          description: "Curated selection of three premium wines with gift packaging"
        },
        {
          id: 18,
          name: "Whiskey Tasting Set",
          price: 199.99,
          image: "/api/placeholder/300/400",
          rating: 4.7,
          reviews: 67,
          category: "gifts",
          subCategory: "spirit-set",
          brand: "Speedy Liquor",
          badge: "Gift Set",
          description: "Four premium whiskeys with tasting notes and glassware"
        }
      ],
      cocktails: [
        {
          id: 19,
          name: "Premium Cocktail Mixer Set",
          price: 49.99,
          image: "/api/placeholder/300/400",
          rating: 4.6,
          reviews: 134,
          category: "cocktails",
          subCategory: "mixers",
          brand: "Fever-Tree",
          description: "Complete set of premium mixers for classic cocktails"
        },
        {
          id: 20,
          name: "Bartender's Essential Kit",
          price: 89.99,
          image: "/api/placeholder/300/400",
          rating: 4.5,
          reviews: 78,
          category: "cocktails",
          subCategory: "tools",
          brand: "Professional Bar",
          description: "Everything needed to craft professional cocktails at home"
        }
      ]
    };

    setTimeout(() => {
      setProducts(mockProducts[id] || []);
      setLoading(false);
    }, 1000);
  }, [id]);

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
    spirits: {
      title: "Spirits",
      filters: {
        type: ["Bourbon", "Scotch", "Irish Whiskey", "Rye Whiskey", "Japanese Whisky", "Tennessee Whiskey", "Vodka", "Gin", "Rum", "Tequila", "Cognac & Brandy", "Liqueurs"],
        brand: ["Macallan", "Johnnie Walker", "Hennessy", "Grey Goose", "Patron", "Bombay Sapphire"],
        price: ["Under $30", "$30-$80", "$80-$200", "Over $200"],
        rating: ["4+ Stars", "3+ Stars", "2+ Stars"],
        availability: ["In Stock", "Limited"]
      }
    },
    beer: {
      title: "Beer & Seltzers",
      filters: {
        type: ["Craft Beer", "Import Beer", "Hard Seltzers", "Ready to Drink", "THC-Infused"],
        size: ["1/2 Kegs", "1/4 Kegs", "1/6 Kegs", "Bottles", "Cans"],
        brand: ["Budweiser", "Corona", "Heineken", "Stella Artois", "Guinness", "Blue Moon"],
        price: ["Under $10", "$10-$20", "$20-$40", "Over $40"],
        rating: ["4+ Stars", "3+ Stars", "2+ Stars"],
        availability: ["In Stock", "Limited"]
      }
    },
    new: {
      title: "New Arrivals",
      filters: {
        type: ["New Wines", "New Spirits", "New Beers", "Seasonal Selections"],
        category: ["Staff Picks", "Customer Favorites", "Award Winners", "Limited Editions"],
        price: ["Under $25", "$25-$75", "$75-$150", "Over $150"],
        rating: ["4+ Stars", "3+ Stars", "2+ Stars"],
        availability: ["In Stock", "Limited"]
      }
    },
    gifts: {
      title: "Gifts",
      filters: {
        type: ["Wine Gift Sets", "Spirit Gift Sets", "Corporate Gifts", "Holiday Gifts"],
        category: ["Gift Cards", "Accessories", "Glassware", "Storage"],
        price: ["Under $50", "$50-$100", "$100-$200", "Over $200"],
        rating: ["4+ Stars", "3+ Stars", "2+ Stars"],
        availability: ["In Stock", "Limited"]
      }
    },
    // Additional subcategories for detailed filtering
    champagne: {
      title: "Champagne & Sparkling",
      filters: {
        type: ["Champagne", "Prosecco", "Cava", "Sparkling Wine"],
        region: ["French Champagne", "Italian Prosecco", "Spanish Cava", "California Sparkling"],
        brand: ["Dom Pérignon", "Veuve Clicquot", "Krug", "Cristal", "Moët & Chandon"],
        price: ["Under $50", "$50-$150", "$150-$300", "Over $300"],
        rating: ["4+ Stars", "3+ Stars", "2+ Stars"],
        availability: ["In Stock", "Limited"]
      }
    },
    cocktails: {
      title: "Cocktail Essentials",
      filters: {
        type: ["Mixers", "Bitters", "Syrups", "Garnishes", "Tools"],
        brand: ["Angostura", "Cointreau", "Luxardo", "Fever-Tree", "Monin"],
        price: ["Under $15", "$15-$30", "$30-$60", "Over $60"],
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
  }, [id, subcategory]); // Reset filters when category changes

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
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <span>Home</span>
          <span className="separator">›</span>
          <span className="current">{currentCategory.title}</span>
          {subcategory && (
            <>
              <span className="separator">›</span>
              <span className="current">{subcategory.replace(/-/g, ' ').replace(/and/g, '&')}</span>
            </>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="category-layout">
        <div className="container">
          <div className="category-grid">
            {/* Left Sidebar - Filters */}
            <aside className="filters-sidebar">
              <div className="filters-header">
                <h3>Filters</h3>
                <button className="clear-filters" onClick={clearAllFilters}>
                  Clear All
                </button>
              </div>

              {/* Filter Groups */}
              {Object.entries(currentCategory.filters).map(([filterType, options]) => (
                <div key={filterType} className="filter-group">
                  <h4 className="filter-title">
                    {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                  </h4>
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
              <div className="filter-group">
                <h4 className="filter-title">Price Range</h4>
                <div className="price-range-filter">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="price-slider"
                  />
                  <div className="price-display">
                    ${priceRange[0]} - ${priceRange[1] === 1000 ? '1000+' : priceRange[1]}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="category-main">
              {/* Page Header */}
              <div className="category-header">
                <h1>{subcategory ? subcategory.replace(/-/g, ' ').replace(/and/g, '&') : currentCategory.title}</h1>
                <div className="results-info">
                  {sortedProducts.length} products
                </div>
              </div>

              {/* Controls Bar */}
              <div className="controls-bar">
                <div className="controls-left">
                  <div className="sort-group">
                    <label>Sort by:</label>
                    <select 
                      value={sortBy} 
                      onChange={(e) => setSortBy(e.target.value)}
                      className="sort-select"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                      <option value="name">Name: A to Z</option>
                    </select>
                  </div>
                </div>

                <div className="controls-right">
                  <div className="view-toggle">
                    <button 
                      className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                      onClick={() => setViewMode('grid')}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        <rect x="1" y="1" width="6" height="6" fill="currentColor"/>
                        <rect x="9" y="1" width="6" height="6" fill="currentColor"/>
                        <rect x="1" y="9" width="6" height="6" fill="currentColor"/>
                        <rect x="9" y="9" width="6" height="6" fill="currentColor"/>
                      </svg>
                    </button>
                    <button 
                      className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                      onClick={() => setViewMode('list')}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        <rect x="1" y="2" width="14" height="2" fill="currentColor"/>
                        <rect x="1" y="7" width="14" height="2" fill="currentColor"/>
                        <rect x="1" y="12" width="14" height="2" fill="currentColor"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Products Grid/List */}
              {loading ? (
                <div className="loading">
                  <div className="spinner"></div>
                  <p>Loading products...</p>
                </div>
              ) : (
                <div className={`products-container ${viewMode}`}>
                  {sortedProducts.map(product => (
                    <ProductCard key={product.id} product={product} viewMode={viewMode} />
                  ))}
                </div>
              )}

              {/* No Products Message */}
              {!loading && sortedProducts.length === 0 && (
                <div className="no-products">
                  <h3>No products found</h3>
                  <p>Try adjusting your filters or search criteria</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;