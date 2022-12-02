import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const StarRating = (props) => {
  const { rating } = props;

  function getStarIcon(star) {
    if (star <= rating) {
      return faStar;
    } else if (star === Math.ceil(rating) && !Number.isInteger(rating)) {
      return faStarHalfStroke;
    } else {
      return faRegularStar;
    }
  }

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <FontAwesomeIcon
            key={star}
            icon={getStarIcon(star)}
            className="text-warning"
          />
        );
      })}
    </div>
  );
};

export default StarRating;
