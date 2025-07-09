// API service for fetching products and categories
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

class ApiService {
  // Products
  async getProducts(params = {}) {
    const { page = 1, limit = 24, category, subCategory, minPrice, maxPrice, sort } = params;
    
    let url = `${API_BASE_URL}/products?_page=${page}&_limit=${limit}`;
    
    if (category) {
      url += `&category=${category}`;
    }
    
    if (subCategory) {
      url += `&subCategory=${subCategory}`;
    }
    
    if (minPrice) {
      url += `&price_gte=${minPrice}`;
    }
    
    if (maxPrice) {
      url += `&price_lte=${maxPrice}`;
    }
    
    if (sort) {
      const sortParam = this.getSortParam(sort);
      if (sortParam) {
        url += `&${sortParam}`;
      }
    }
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      const totalCount = response.headers.get('X-Total-Count') || data.length;
      
      return {
        data,
        total: parseInt(totalCount),
        page,
        limit
      };
    } catch (error) {
      console.error('Error fetching products:', error);
      return { data: [], total: 0, page: 1, limit };
    }
  }
  
  async getProduct(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  }
  
  async getFeaturedProducts() {
    try {
      const response = await fetch(`${API_BASE_URL}/products?featured=true`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching featured products:', error);
      return [];
    }
  }
  
  // Categories
  async getCategories() {
    try {
      const response = await fetch(`${API_BASE_URL}/categories?active=true&_sort=sortOrder`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }
  
  async getCategory(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/categories/${id}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching category:', error);
      return null;
    }
  }
  
  async getFeaturedCategories() {
    try {
      const response = await fetch(`${API_BASE_URL}/categories?featured=true&active=true&_sort=sortOrder`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching featured categories:', error);
      return [];
    }
  }
  
  // Search
  async searchProducts(query) {
    try {
      const response = await fetch(`${API_BASE_URL}/products?q=${encodeURIComponent(query)}`);
      return await response.json();
    } catch (error) {
      console.error('Error searching products:', error);
      return [];
    }
  }
  
  // Helper methods
  getSortParam(sortBy) {
    const sortMappings = {
      'price-asc': '_sort=price&_order=asc',
      'price-desc': '_sort=price&_order=desc',
      'name-asc': '_sort=name&_order=asc',
      'name-desc': '_sort=name&_order=desc',
      'rating-desc': '_sort=rating&_order=desc',
      'newest': '_sort=createdAt&_order=desc',
      'popularity': '_sort=reviews&_order=desc'
    };
    
    return sortMappings[sortBy] || '';
  }
  
  // Product filters
  async getFilterOptions(category) {
    try {
      const response = await fetch(`${API_BASE_URL}/products?category=${category}`);
      const products = await response.json();
      
      // Extract unique filter options
      const brands = [...new Set(products.map(p => p.brand))].sort();
      const subCategories = [...new Set(products.map(p => p.subCategory))].sort();
      const sizes = [...new Set(products.map(p => p.size))].sort();
      const origins = [...new Set(products.map(p => p.origin).filter(Boolean))].sort();
      
      // Price range
      const prices = products.map(p => p.price);
      const priceRange = {
        min: Math.min(...prices),
        max: Math.max(...prices)
      };
      
      return {
        brands,
        subCategories,
        sizes,
        origins,
        priceRange
      };
    } catch (error) {
      console.error('Error fetching filter options:', error);
      return {
        brands: [],
        subCategories: [],
        sizes: [],
        origins: [],
        priceRange: { min: 0, max: 1000 }
      };
    }
  }
}

export default new ApiService();
