import * as React from 'react';
import { useParams } from 'react-router-dom';
import restaurantsAPI from '../api/restaurants';

const AddReview = () => {
  const { id } = useParams();
  const [name, setName] = React.useState('');
  const [review, setReview] = React.useState('');
  const [rating, setRating] = React.useState('Rating');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await restaurantsAPI.post(`/${id}/add-review`, {
        name,
        review,
        rating,
      });

      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="mb-2">
      <form action="">
        <div className="row mb-4">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              placeholder="name"
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              className="form-select mr-sm-2"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="row mb-5">
          <div className="form-group">
            <label htmlFor="review">Review</label>
            <textarea
              id="review"
              className="form-control mb-4"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
