import React from 'react';

const Product = ({ name, description, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Product;
