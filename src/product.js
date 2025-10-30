// import React from 'react';
// import { useCart } from './CartContext'; 

// export const Product = ({ product, productDetail }) => {
//   const { addToCart } = useCart(); 

//   const handleAddToCart = (e) => {
//     e.stopPropagation(); 
//     addToCart(product); 
//     alert(`${product.title} added to your cart!`);
//   };

//   return (
//     <div className="product" onClick={() => productDetail(product.id)}>
//       <img
//         src={product?.images?.[0]}
//         alt={product?.title}
//         height={200}
//         width={150}
//       />
//       <p>{product?.title}</p>
//       <p>₹{product?.price}</p>

//       <button onClick={handleAddToCart}>Add to cart</button>
//     </div>
//   );
// };

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartActions"; // import action

export const Product = ({ product, productDetail }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    alert(`${product.title} added to your cart!`);
  };

  return (
    <div className="product" onClick={() => productDetail(product.id)}>
      <img
        src={product?.images?.[0]}
        alt={product?.title}
        height={200}
        width={150}
      />
      <p>{product?.title}</p>
      <p>₹{product?.price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};
