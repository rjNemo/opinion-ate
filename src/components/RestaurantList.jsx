import React, {useEffect} from 'react';

export const RestaurantList = ({loadRestaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <div>
      <h2>Restaurant list</h2>
    </div>
  );
};
export default RestaurantList;
