import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  ImageInput,
  ImageField,
  required,
  minValue,
} from 'react-admin';

const CategoryCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" label="Category ID" validate={[required()]} />
      <TextInput source="name" label="Category Name" validate={[required()]} fullWidth />
      <TextInput source="description" label="Description" multiline rows={3} fullWidth />
      <TextInput source="icon" label="Icon (emoji)" />
      
      <ImageInput source="image" label="Category Image" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      
      <NumberInput source="sortOrder" label="Sort Order" validate={[minValue(0)]} defaultValue={0} />
      <NumberInput source="productCount" label="Product Count" defaultValue={0} />
      
      <BooleanInput source="featured" label="Featured Category" defaultValue={false} />
      <BooleanInput source="active" label="Active" defaultValue={true} />
      
      <TextInput source="metaTitle" label="Meta Title" fullWidth />
      <TextInput source="metaDescription" label="Meta Description" multiline rows={2} fullWidth />
      <TextInput source="slug" label="URL Slug" />
    </SimpleForm>
  </Create>
);

export default CategoryCreate;
