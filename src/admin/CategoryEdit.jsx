import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  ImageInput,
  ImageField,
  required,
  minValue,
} from 'react-admin';

const CategoryEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" label="Category ID" validate={[required()]} disabled />
      <TextInput source="name" label="Category Name" validate={[required()]} fullWidth />
      <TextInput source="description" label="Description" multiline rows={3} fullWidth />
      <TextInput source="icon" label="Icon (emoji)" />
      
      <ImageInput source="image" label="Category Image" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      
      <NumberInput source="sortOrder" label="Sort Order" validate={[minValue(0)]} />
      <NumberInput source="productCount" label="Product Count" disabled />
      
      <BooleanInput source="featured" label="Featured Category" />
      <BooleanInput source="active" label="Active" />
      
      <TextInput source="metaTitle" label="Meta Title" fullWidth />
      <TextInput source="metaDescription" label="Meta Description" multiline rows={2} fullWidth />
      <TextInput source="slug" label="URL Slug" />
    </SimpleForm>
  </Edit>
);

export default CategoryEdit;
