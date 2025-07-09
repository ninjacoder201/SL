import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  ImageField,
  EditButton,
  DeleteButton,
  BooleanField,
  DateField,
  Filter,
  TextInput,
  SelectInput,
  NumberInput,
  BooleanInput,
} from 'react-admin';

const ProductFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <SelectInput
      source="category"
      label="Category"
      choices={[
        { id: 'wine', name: 'Wine' },
        { id: 'beer', name: 'Beer' },
        { id: 'spirits', name: 'Spirits' },
        { id: 'champagne', name: 'Champagne' },
        { id: 'cocktails', name: 'Cocktails' },
      ]}
    />
    <SelectInput
      source="subCategory"
      label="Sub Category"
      choices={[
        { id: 'red', name: 'Red Wine' },
        { id: 'white', name: 'White Wine' },
        { id: 'rosé', name: 'Rosé' },
        { id: 'sparkling', name: 'Sparkling' },
        { id: 'lager', name: 'Lager' },
        { id: 'ale', name: 'Ale' },
        { id: 'stout', name: 'Stout' },
        { id: 'whiskey', name: 'Whiskey' },
        { id: 'vodka', name: 'Vodka' },
        { id: 'gin', name: 'Gin' },
        { id: 'rum', name: 'Rum' },
        { id: 'tequila', name: 'Tequila' },
      ]}
    />
    <NumberInput source="price_gte" label="Min Price" />
    <NumberInput source="price_lte" label="Max Price" />
    <BooleanInput source="inStock" label="In Stock" />
  </Filter>
);

const ProductList = (props) => (
  <List filters={<ProductFilter />} {...props}>
    <Datagrid rowClick="edit">
      <ImageField source="image" label="Image" />
      <TextField source="name" label="Product Name" />
      <TextField source="brand" label="Brand" />
      <TextField source="category" label="Category" />
      <TextField source="subCategory" label="Sub Category" />
      <NumberField source="price" label="Price ($)" />
      <NumberField source="originalPrice" label="Original Price ($)" />
      <TextField source="size" label="Size" />
      <NumberField source="rating" label="Rating" />
      <NumberField source="reviews" label="Reviews" />
      <BooleanField source="pickupAvailable" label="Pickup" />
      <BooleanField source="deliveryAvailable" label="Delivery" />
      <TextField source="availability" label="Stock Status" />
      <DateField source="createdAt" label="Created" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default ProductList;
