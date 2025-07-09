# Speedy Liquor Admin Dashboard

This project includes a React Admin dashboard for managing products and categories.

## Setup Instructions

### 1. Start the JSON Server (Mock API)
```bash
npm run json-server
```
This will start a mock API server on `http://localhost:3001` with the data from `db.json`.

### 2. Start the React App
```bash
npm start
```
This will start the React app on `http://localhost:3000`.

### 3. Access the Admin Dashboard
Navigate to `http://localhost:3000/admin` to access the admin dashboard.

## Admin Features

### Products Management
- **List Products**: View all products with filters and search
- **Add Product**: Create new products with all details
- **Edit Product**: Update existing product information
- **Delete Product**: Remove products from the catalog

### Categories Management
- **List Categories**: View all categories
- **Add Category**: Create new product categories
- **Edit Category**: Update category information
- **Delete Category**: Remove categories

### Product Fields
- Basic Info: Name, Brand, Description
- Categorization: Category, Sub-Category
- Pricing: Price, Original Price, Sign-in Discount
- Details: Size, Rating, Reviews, Stock
- Images: Product images
- Availability: Stock status, Pickup/Delivery options
- Additional: Badge, Weight, Alcohol Content, Origin, Vintage

### Category Fields
- Basic Info: Name, Description, Icon
- Images: Category images
- Settings: Sort Order, Featured status, Active status
- SEO: Meta title, Meta description, URL slug

## API Endpoints

The JSON Server provides the following endpoints:

### Products
- `GET /products` - List all products
- `GET /products/:id` - Get specific product
- `POST /products` - Create new product
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product

### Categories
- `GET /categories` - List all categories
- `GET /categories/:id` - Get specific category
- `POST /categories` - Create new category
- `PUT /categories/:id` - Update category
- `DELETE /categories/:id` - Delete category

### Query Parameters
- `_page` & `_limit` - Pagination
- `_sort` & `_order` - Sorting
- `category` - Filter by category
- `subCategory` - Filter by sub-category
- `q` - Search query
- `price_gte` & `price_lte` - Price range

## Integration with Main Website

The main website can fetch data from the same API endpoints using the `ApiService` class located in `src/services/apiService.js`.

### Usage Examples

```javascript
import ApiService from '../services/apiService';

// Get all products
const products = await ApiService.getProducts();

// Get products by category
const wineProducts = await ApiService.getProducts({ category: 'wine' });

// Get featured products
const featuredProducts = await ApiService.getFeaturedProducts();

// Search products
const searchResults = await ApiService.searchProducts('cabernet');
```

## Development Notes

### Adding New Fields
To add new fields to products or categories:
1. Update the JSON structure in `db.json`
2. Add the field to the respective Create/Edit components
3. Update the List component to display the new field

### Customizing the Admin UI
The admin dashboard can be customized by:
- Modifying the React Admin components
- Updating the CSS in `AdminDashboard.css`
- Adding new resources or changing existing ones

### Production Deployment
For production:
1. Replace JSON Server with a real database (PostgreSQL, MongoDB, etc.)
2. Update the API endpoints in `AdminDashboard.jsx` and `apiService.js`
3. Add authentication and authorization
4. Implement proper error handling and validation

## Troubleshooting

### Common Issues
1. **Admin dashboard not loading**: Make sure JSON Server is running on port 3001
2. **CORS errors**: JSON Server should handle CORS automatically
3. **Data not persisting**: Check that `db.json` is writable and in the correct location

### Debug Mode
To debug the admin dashboard:
1. Open browser developer tools
2. Check the Network tab for API requests
3. Look for errors in the Console tab
