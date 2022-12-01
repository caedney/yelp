import * as React from 'react';

export const RestaurantsContext = React.createContext();

export const RestaurantsContextProvider = (props) => {
  const { children } = props;

  const [restaurants, setRestaurants] = React.useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = React.useState([]);

  const addRestaurants = (restaurant) => {
    setRestaurants((state) => [...state, restaurant]);
  };

  const value = {
    restaurants,
    setRestaurants,
    addRestaurants,
    selectedRestaurant,
    setSelectedRestaurant,
  };

  return (
    <RestaurantsContext.Provider value={value}>
      {children}
    </RestaurantsContext.Provider>
  );
};
