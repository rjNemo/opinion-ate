import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {selectRestaurants, loadRestaurants} from '../store/restaurantSlice';

export const RestaurantList = ({loadRestaurants, restaurants}) => {
  useEffect(() => loadRestaurants(), [loadRestaurants]);

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
  const restaurants = useSelector(selectRestaurants);

  return (
    <RestaurantList
      restaurants={restaurants}
      loadRestaurants={loadRestaurants}
    />
  );
};

export default RestaurantListContainer;
