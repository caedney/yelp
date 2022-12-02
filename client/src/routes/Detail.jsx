import * as React from 'react';
import { useParams } from 'react-router-dom';
import restaurantsAPI from '../api/restaurants';
import AddReview from '../components/AddReview';
import Reviews from '../components/Reviews';
import { RestaurantsContext } from '../context/RestaurantsContext';

const Detail = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    React.useContext(RestaurantsContext);

  React.useEffect(() => {
    async function getRestaurant() {
      try {
        const response = await restaurantsAPI.get(`/${id}`);
        setSelectedRestaurant(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    getRestaurant();
  }, [id, setSelectedRestaurant]);

  if (!selectedRestaurant) {
    return null;
  }

  return (
    <div>
      <h1 className="text-center py-4">
        {selectedRestaurant.restaurants[0].name}
      </h1>
      <Reviews reviews={selectedRestaurant.reviews} />
      <AddReview />
    </div>
  );
};

export default Detail;
