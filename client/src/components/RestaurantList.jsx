import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import restaurantsAPI from '../api/restaurants';
import { RestaurantsContext } from '../context/RestaurantsContext';
import StarRating from './StarRating';

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = React.useContext(RestaurantsContext);

  const history = useNavigate();

  React.useEffect(() => {
    async function getRestaurants() {
      try {
        const response = await restaurantsAPI.get('/');
        setRestaurants(response.data.restaurants);
      } catch (error) {
        console.log(error.message);
      }
    }

    getRestaurants();
  }, [setRestaurants]);

  const handleDelete = (id) => (e) => {
    e.stopPropagation();

    async function deleteRestaurants() {
      try {
        await restaurantsAPI.delete(`/${id}`);
        setRestaurants(
          restaurants.filter((restaurant) => restaurant.id !== id)
        );
      } catch (error) {
        console.log(error.message);
      }
    }

    deleteRestaurants();
  };

  const handleUpdate = (id) => (e) => {
    e.stopPropagation();
    history(`/restaurants/${id}/update`);
  };

  const handleSelect = (id) => () => {
    history(`/restaurants/${id}`);
  };

  const renderRating = (restaurant) => {
    return (
      <div className="d-flex">
        <StarRating rating={restaurant.rating_average} />
        <div className="text-warning ml-1">{`(${
          restaurant.rating_count || 0
        })`}</div>
      </div>
    );
  };

  return (
    <div className="list-group">
      <table className="table table-hover table-dark align-middle">
        <thead>
          <tr className="table-primary">
            <th scope="col">Restaurants</th>
            <th scope="col">Location</th>
            <th scope="col">Prince Range</th>
            <th scope="col">Reviews</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => {
            const { id, name, location, price_range } = restaurant;

            return (
              <tr key={id} onClick={handleSelect(id)}>
                <td>{name}</td>
                <td>{location}</td>
                <td>{'$'.repeat(price_range)}</td>
                <td>{renderRating(restaurant)}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={handleUpdate(id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={handleDelete(id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
