import React from 'react';
import Product from './Product';

const App = () => {
  return (
    <div>
      <h1>My Online Store</h1>
      <Product
        name="Example Product"
        description="e"
        price="19.99"
      />
    </div>
  );
};

export default App;
