import * as React from 'react';
import restaurantsAPI from '../api/restaurants';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantList = (props) => {
  const [restaurants, setRestaurants] = React.useContext(RestaurantsContext);

  React.useEffect(() => {
    async function getRestaurants() {
      try {
        const response = await restaurantsAPI.get('/');
        setRestaurants(response.data.data.restaurants);
      } catch (error) {
        console.log(error.message);
      }
    }

    getRestaurants();
  }, [setRestaurants]);

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
              <tr key={id}>
                <td>{name}</td>
                <td>{location}</td>
                <td>{'$'.repeat(price_range)}</td>
                <td>Reviews</td>
                <td>
                  <button className="btn btn-warning">Update</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
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
