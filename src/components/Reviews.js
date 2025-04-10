import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/components.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const countWords = (text) => {
    if (typeof text !== 'string') return 0;
    return text.trim().split(/\s+/).length;
  };
  



  useEffect(() => {
    axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1')
      .then(response => {
        setReviews(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to load reviews');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading reviews...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <>
      <div className='ts'>
        <h1>What Our Customers Say</h1>
      </div>
      <div className="testimonial-section">


        {reviews.filter(review => countWords(review.review) <= 10).map((review, index) => (
          <div key={index} className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">{review.Reviews}</p>
            <div className="testimonial-footer">
              <img
                src={review.image || 'https://via.placeholder.com/48'}
                alt={review.Name}
                className="testimonial-avatar"
              />
              <div>
                <p className="testimonial-name">{review.Name}</p>
                <p className="testimonial-role">Patient</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
