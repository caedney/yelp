import * as React from 'react';
import StarRating from './StarRating';

const Reviews = (props) => {
  const { reviews } = props;

  return (
    <div className="row row-cols-3 mb-5">
      {reviews.map((review) => {
        return (
          <div key={review.id} className="col p-2">
            <div className="card text-white bg-primary">
              <div className="card-header d-flex justify-content-between">
                <span>{review.name}</span>
                <span>
                  <StarRating rating={review.rating} />
                </span>
              </div>
              <div className="card-body">
                <p className="card-text">{review.review}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
