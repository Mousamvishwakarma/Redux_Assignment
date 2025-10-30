import React from 'react';

const Reviews = () => {
  return (
    <div style={{ 
      backgroundColor: '#fff8f2', 
      padding: '20px', 
      borderRadius: '10px', 
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)', 
      width: '300px', 
      margin: '20px auto',
      textAlign: 'center'
    }}>
      <h3 style={{ color: '#ff6600' }}>Customer Reviews</h3>
      <p>⭐⭐⭐⭐☆</p>
      <p>"The product quality is really good and delivery was on time!"</p>
      <p><strong>- Sejal</strong></p>
    </div>
  );
};

export default Reviews;
