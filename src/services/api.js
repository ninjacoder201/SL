import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://api.speedyliquor.com',
  timeout: 10000,
});

// Mock data for development
const mockData = {
  categories: [
    { id: 'wine', name: 'Wine', count: 2500 },
    { id: 'spirits', name: 'Spirits', count: 1800 },
    { id: 'beer', name: 'Beer', count: 900 },
    { id: 'champagne', name: 'Champagne', count: 300 },
    { id: 'sake', name: 'Sake & Asian', count: 150 }
  ],
  featuredProducts: [
    {
      id: 1,
      name: "Dom Pérignon Vintage 2012",
      price: 199.99,
      originalPrice: 249.99,
      image: "/api/placeholder/300/400",
      rating: 4.8,
      reviews: 124,
      category: "champagne",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Macallan 18 Year Single Malt",
      price: 599.99,
      image: "/api/placeholder/300/400",
      rating: 4.9,
      reviews: 89,
      category: "whiskey",
      badge: "Premium"
    },
    {
      id: 3,
      name: "Caymus Cabernet Sauvignon 2021",
      price: 89.99,
      originalPrice: 109.99,
      image: "/api/placeholder/300/400",
      rating: 4.7,
      reviews: 256,
      category: "wine"
    }
  ]
};

// API functions with mock fallback
export const fetchCategories = async () => {
  try {
    if (process.env.NODE_ENV === 'development') {
      return Promise.resolve({ data: mockData.categories });
    }
    return await api.get('/categories');
  } catch (error) {
    console.log('Using mock data for categories');
    return Promise.resolve({ data: mockData.categories });
  }
};

export const fetchProductsByCategory = async (id) => {
  try {
    if (process.env.NODE_ENV === 'development') {
      return Promise.resolve({ data: mockData.featuredProducts });
    }
    return await api.get(`/categories/${id}/products`);
  } catch (error) {
    console.log('Using mock data for products');
    return Promise.resolve({ data: mockData.featuredProducts });
  }
};

export const fetchProductDetails = async (id) => {
  try {
    if (process.env.NODE_ENV === 'development') {
      const product = mockData.featuredProducts.find(p => p.id === parseInt(id));
      return Promise.resolve({ data: product });
    }
    return await api.get(`/products/${id}`);
  } catch (error) {
    console.log('Using mock data for product details');
    const product = mockData.featuredProducts.find(p => p.id === parseInt(id));
    return Promise.resolve({ data: product });
  }
};

export const fetchFeaturedProducts = async () => {
  try {
    if (process.env.NODE_ENV === 'development') {
      return Promise.resolve({ data: mockData.featuredProducts });
    }
    return await api.get('/products/featured');
  } catch (error) {
    console.log('Using mock data for featured products');
    return Promise.resolve({ data: mockData.featuredProducts });
  }
};

export default api;
