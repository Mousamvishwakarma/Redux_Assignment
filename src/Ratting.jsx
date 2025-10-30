import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);

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
      <h3 style={{ color: '#ff6600' }}>Rate this Product</h3>
      <div style={{ fontSize: '24px', margin: '10px 0' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span 
            key={star}
            onClick={() => setRating(star)}
            style={{
              cursor: 'pointer',
              color: star <= rating ? '#ff6600' : '#ccc'
            }}
          >
            ★
          </span>
        ))}
      </div>
      <p>{rating > 0 ? `You rated: ${rating} ★` : 'Click stars to rate'}</p>
    </div>
  );
};

export default Rating;
