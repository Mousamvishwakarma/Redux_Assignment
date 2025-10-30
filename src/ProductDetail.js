// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom";
// import "./ProductDetail.css";
// import { useCart } from "./CartContext"; 

// const ProductDetail = () => {
//   const [product, setProduct] = useState(null);
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart(); 

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`https://dummyjson.com/products/${id}`);
//         const data = await res.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   const handleAddToCart = () => {
//     addToCart(product); 
//     alert(`${product.title} added to your cart!`);
//     navigate("/cart"); 
//   };

//   return (
//     <div className="product-detail-wrapper">
//       {product ? (
//         <div className="product-detail-card">
//           <div className="product-image-section">
//             <img
//               src={product.thumbnail}
//               alt={product.title}
//               className="detail-image"
//             />
//           </div>

//           <div className="product-info-section">
//             <h1 className="detail-title">{product.title}</h1>
//             <p className="detail-desc">{product.description}</p>

//             <div className="price-rating">
//               <span className="price-tag">₹{product.price}</span>
//               <span className="rating-tag">⭐ {product.rating}/5</span>
//             </div>

            
//             <button className="cart-btn" onClick={handleAddToCart}>
//               Add to Cart
//             </button>

//             <div className="detail-nav">
//               <NavLink to="ratting" className="detail-link">
//                 Rating
//               </NavLink>
//               <NavLink to="reviews" className="detail-link">
//                 Reviews
//               </NavLink>
//             </div>

//             <Outlet />
//           </div>
//         </div>
//       ) : (
//         <p className="loading-text">Loading product details...</p>
//       )}
//     </div>
//   );
// };

// export default ProductDetail;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom";
import "./ProductDetail.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartActions";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    dispatch(addToCart(product)); 
    alert(`${product.title} added to your cart!`);
    navigate("/cart"); 
  };

  return (
    <div className="product-detail-wrapper">
      {product ? (
        <div className="product-detail-card">
       
          <div className="product-image-section">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="detail-image"
            />
          </div>

         
          <div className="product-info-section">
            <h1 className="detail-title">{product.title}</h1>
            <p className="detail-desc">{product.description}</p>

            <div className="price-rating">
              <span className="price-tag">₹{product.price}</span>
              <span className="rating-tag">⭐ {product.rating}/5</span>
            </div>

            
            <button
              className="cart-btn"
              onClick={(e) => handleAddToCart(e, product)} 
            >
              Add to Cart
            </button>

            <div className="detail-nav">
              <NavLink to="ratting" className="detail-link">
                Rating
              </NavLink>
              <NavLink to="reviews" className="detail-link">
                Reviews
              </NavLink>
            </div>

            <Outlet />
          </div>
        </div>
      ) : (
        <p className="loading-text">Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetail;
