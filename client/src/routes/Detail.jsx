import * as React from 'react';
import { useParams } from 'react-router-dom';
import restaurantsAPI from '../api/restaurants';
import StarRating from '../components/StarRating';
import { RestaurantsContext } from '../context/RestaurantsContext';

const Detail = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    React.useContext(RestaurantsContext);

  React.useEffect(() => {
    async function getRestaurant() {
      try {
        const response = await restaurantsAPI.get(`/${id}`);
        setSelectedRestaurant(response.data.data.restaurants[0]);
      } catch (error) {
        console.log(error.message);
      }
    }

    getRestaurant();
  }, [id, setSelectedRestaurant]);

  return (
    <div>
      <h1 className="text-center py-4">Detail</h1>
      <h2>{selectedRestaurant.name}</h2>
      <StarRating rating={3.3} />
    </div>
  );
};

export default Detail;
