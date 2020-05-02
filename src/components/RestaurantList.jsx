import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

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

/**
 * Container to get data from the store
 */
const RestaurantListContainer = () => {
  const selectRestaurants = state => ({restaurants: state.restaurants.records});
  const restaurants = useSelector(selectRestaurants);

  return <RestaurantList restaurants={restaurants} />;
};

export default RestaurantListContainer;
