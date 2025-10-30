// import React, { useEffect, useState } from 'react';
// import './Home.css';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from './CartContext'; 

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();
//   const { addToCart } = useCart(); 

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await fetch('https://dummyjson.com/products');
//       const data = await res.json();
//       setProducts(data.products);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const handleAddToCart = (e, product) => {
//     e.stopPropagation(); 
//     addToCart(product);
//     alert(`${product.title} added to cart!`);
//   };

//   const viewDetails = (id) => {
//     navigate(`/product_detail/${id}`);
//   };

//   return (
//     <div className="home-container">
//       <h1 className="home-title">Explore Our Products</h1>

//       <div className="product-grid">
//         {products.map((item) => (
//           <div
//             className="product-card"
//             key={item.id}
//             onClick={() => viewDetails(item.id)}
//           >
//             <img src={item.thumbnail} alt={item.title} className="product-img" />
//             <div className="product-info">
//               <h3 className="product-name">{item.title}</h3>
//               <p className="product-desc">{item.description.slice(0, 50)}...</p>

//               <div className="product-footer">
//                 <span className="product-price">₹{item.price}</span>

                
//                 <button
//                   className="add-cart-btn"
//                   onClick={(e) => handleAddToCart(e, item)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartActions";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .catch((err) => console.error("fetch error", err));
  }, []);

  const handleAddToCart = (e, product) => {
    e.stopPropagation(); 
    console.log("Dispatching ADD_TO_CART", product);
    dispatch(addToCart(product));
   
  };

  const viewDetails = (id) => navigate(`/product_detail/${id}`);

  return (
    <div className="home-container">
      <h1 className="home-title">Explore Our Products</h1>
      <div className="product-grid">
        {products.map((item) => (
          <div
            key={item.id}
            className="product-card"
            onClick={() => viewDetails(item.id)}
            style={{ cursor: "pointer" }}
          >
            <img src={item.thumbnail} alt={item.title} className="product-img" />
            <div className="product-info">
              <h3>{item.title}</h3>
              <p>{(item.description || "").slice(0, 50)}...</p>
              <div className="product-footer">
                <span>₹{item.price}</span>
                <button onClick={(e) => handleAddToCart(e, item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
