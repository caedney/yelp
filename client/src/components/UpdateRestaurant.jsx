import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import restaurantsAPI from '../api/restaurants';

const UpdateRestaurant = () => {
  const { id } = useParams();
  const history = useNavigate();

  const [name, setName] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [priceRange, setPriceRange] = React.useState('Price Range');

  React.useEffect(() => {
    async function getRestaurant() {
      try {
        const response = await restaurantsAPI.get(`/${id}`);
        setName(response.data.data.restaurants[0].name);
        setLocation(response.data.data.restaurants[0].location);
        setPriceRange(response.data.data.restaurants[0].price_range);
      } catch (error) {
        console.log(error.message);
      }
    }

    getRestaurant();
  }, [id, setName, setLocation, setPriceRange]);

  const handleSubmit = (e) => {
    e.preventDefault();

    async function updateRestaurant() {
      try {
        await restaurantsAPI.put(`/${id}`, {
          name,
          location,
          price_range: priceRange,
        });

        history('/');
      } catch (error) {
        console.log(error.message);
      }
    }

    updateRestaurant();
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
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
