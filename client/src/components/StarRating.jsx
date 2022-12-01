import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const StarRating = (props) => {
  const { rating } = props;

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => {
        if (star <= rating) {
          return <FontAwesomeIcon icon={faStar} />;
        } else if (star === Math.ceil(rating) && !Number.isInteger(rating)) {
          return <FontAwesomeIcon icon={faStarHalfStroke} />;
        } else {
          return <FontAwesomeIcon icon={faRegularStar} />;
        }
      })}
    </div>
  );
};

export default StarRating;
