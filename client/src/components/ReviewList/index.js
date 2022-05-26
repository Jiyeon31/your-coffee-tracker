import React from 'react';
import { Link } from 'react-router-dom';

const ReviewList = ({ reviews, title }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-light">{title}</span>
      </div>
      <div className="">
        {reviews &&
          reviews.map(review => (
            <p className="border" key={review._id}>
              {review.reviewBody} {' '}
              <Link to={`/profile/?user=${review.userName}`} style={{ fontWeight: 700 }}>
                {review.userName} on {review.createdAt}
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
};

export default ReviewList;
