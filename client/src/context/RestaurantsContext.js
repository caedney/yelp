import * as React from 'react';

export const RestaurantsContext = React.createContext();

export const RestaurantsContextProvider = (props) => {
  const { children } = props;

  const [restaurants, setRestaurants] = React.useState([]);

  const value = [restaurants, setRestaurants];

  return (
    <RestaurantsContext.Provider value={value}>
      {children}
    </RestaurantsContext.Provider>
  );
};
