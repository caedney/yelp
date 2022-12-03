import * as React from 'react';
import restaurantsAPI from '../api/restaurants';
import { RestaurantsContext } from '../context/RestaurantsContext';

const AddRestaurant = () => {
  const { addRestaurants } = React.useContext(RestaurantsContext);

  const [name, setName] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [priceRange, setPriceRange] = React.useState('Price Range');

  const handleSubmit = (e) => {
    e.preventDefault();

    async function addRestaurant() {
      try {
        const response = await restaurantsAPI.post('/', {
          name,
          location,
          price_range: priceRange,
        });

        addRestaurants(response.data.restaurants[0]);
      } catch (error) {
        console.log(error.message);
      }
    }

    addRestaurant();
  };

  return (
    <div className="mb-4">
      <form action="">
        <div className="row">
          <div className="col">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select
              className="form-select mr-sm-2"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
