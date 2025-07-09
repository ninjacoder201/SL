import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  EditButton,
  DeleteButton,
  BooleanField,
  NumberField,
  DateField,
} from 'react-admin';

const CategoryList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ImageField source="image" label="Image" />
      <TextField source="name" label="Category Name" />
      <TextField source="id" label="ID" />
      <TextField source="icon" label="Icon" />
      <TextField source="description" label="Description" />
      <NumberField source="productCount" label="Products" />
      <BooleanField source="featured" label="Featured" />
      <BooleanField source="active" label="Active" />
      <DateField source="createdAt" label="Created" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default CategoryList;
