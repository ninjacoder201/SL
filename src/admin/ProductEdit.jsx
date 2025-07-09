import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  BooleanInput,
  ImageInput,
  ImageField,
  required,
  minValue,
  maxValue,
} from 'react-admin';

const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" label="Product Name" validate={[required()]} fullWidth />
      <TextInput source="brand" label="Brand" validate={[required()]} />
      <TextInput source="description" label="Description" multiline rows={3} fullWidth />
      
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
        validate={[required()]}
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
        validate={[required()]}
      />
      
      <NumberInput source="price" label="Price ($)" validate={[required(), minValue(0)]} />
      <NumberInput source="originalPrice" label="Original Price ($)" validate={[minValue(0)]} />
      <NumberInput source="signInDiscount" label="Sign-in Discount ($)" validate={[minValue(0)]} />
      <TextInput source="size" label="Size" validate={[required()]} />
      
      <NumberInput 
        source="rating" 
        label="Rating" 
        validate={[minValue(0), maxValue(5)]} 
        step={0.1}
      />
      <NumberInput source="reviews" label="Number of Reviews" validate={[minValue(0)]} />
      
      <ImageInput source="image" label="Product Image" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      
      <SelectInput
        source="availability"
        label="Availability"
        choices={[
          { id: 'In Stock', name: 'In Stock' },
          { id: 'Limited', name: 'Limited' },
          { id: 'Out of Stock', name: 'Out of Stock' },
        ]}
        validate={[required()]}
      />
      
      <BooleanInput source="pickupAvailable" label="Pickup Available" />
      <BooleanInput source="deliveryAvailable" label="Delivery Available" />
      <BooleanInput source="featured" label="Featured Product" />
      
      <TextInput source="badge" label="Badge Text" />
      
      <NumberInput source="stock" label="Stock Quantity" validate={[minValue(0)]} />
      <NumberInput source="weight" label="Weight (oz)" validate={[minValue(0)]} />
      <NumberInput source="alcoholContent" label="Alcohol Content (%)" validate={[minValue(0), maxValue(100)]} />
      
      <TextInput source="origin" label="Origin/Region" />
      <TextInput source="vintage" label="Vintage Year" />
      <TextInput source="producer" label="Producer/Distillery" />
    </SimpleForm>
  </Edit>
);

export default ProductEdit;
