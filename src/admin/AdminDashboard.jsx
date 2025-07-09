import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import ProductList from './ProductList';
import ProductEdit from './ProductEdit';
import ProductCreate from './ProductCreate';
import CategoryList from './CategoryList';
import CategoryEdit from './CategoryEdit';
import CategoryCreate from './CategoryCreate';
import './AdminDashboard.css';

const dataProvider = jsonServerProvider(process.env.REACT_APP_API_URL || 'http://localhost:3001');

const AdminDashboard = () => (
  <Admin dataProvider={dataProvider} title="Speedy Liquor Admin">
    <Resource
      name="products"
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate}
      options={{ label: 'Products' }}
    />
    <Resource
      name="categories"
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
      options={{ label: 'Categories' }}
    />
  </Admin>
);

export default AdminDashboard;
