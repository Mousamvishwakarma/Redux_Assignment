// import React from 'react';
// import './Cart.css';
// import { useCart } from './CartContext'; 

// const Cart = () => {
  
//   const { cart, removeFromCart, clearCart } = useCart();
//   const getTotal = () => {
//     return cart.reduce((acc, item) => acc + (item.price || 0), 0);
//   };

//   return (
//     <div className="cart-wrapper">
//       <h1 className="cart-heading">Your Cart</h1>

//       {cart.length === 0 ? (
//         <p className="empty-message">Your cart is empty!</p>
//       ) : (
//         <div className="cart-list">
//           {cart.map((item, index) => (
//             <div key={index} className="cart-card">
//               <div className="cart-info">
//                 <h3>{item.title}</h3>
//                 <p className="cart-price">₹{item.price.toFixed(2)}</p>
//                 <button
//                   className="remove-btn"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}

//           <div className="cart-summary">
//             <h3>Total Amount: ₹{getTotal().toFixed(2)}</h3>
//             <button className="checkout-btn">Proceed to Checkout</button>
//             <button className="remove-btn" onClick={clearCart}>
//               Clear Cart
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./redux/cartActions";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();

  const fullState = useSelector((s) => s);

 
  const cartItems =
    (fullState && fullState.cart && fullState.cart.cartItems) ||
    fullState.cartItems ||
    [];

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title"> Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">No items added yet.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="cart-item-img"
              />
              <div className="cart-item-info">
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
