import React from 'react';

const ReviewList = ({ reviews, title }) => {
  if (!reviews.length) {
    return <h3>No Reviews Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {reviews &&
        reviews.map(review => (
          <div key={review._id} className="card mb-3">
            <p className="card-header">
              {review.username}
              review on {review.createdAt}
            </p>
            <div className="card-body">
              <p>{review.reviewText}</p>
              <p className="mb-0">
                Comments: {review.commentCount} || Click to{' '}
                {review.commentCount ? 'see' : 'start'} the discussion!
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ReviewList;