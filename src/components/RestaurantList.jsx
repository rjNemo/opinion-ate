import React, {useEffect} from 'react';

export const RestaurantList = ({loadRestaurants, restaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <ul>
      {restaurants.map(r => (
        <li key={r.id}>{r.name}</li>
      ))}
    </ul>
  );
};
export default RestaurantList;
