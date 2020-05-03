import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadRestaurants} from '../store/restaurants/actions';

export const RestaurantList = ({restaurants, loadRestaurants}) => {
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

const selectRestaurants = state => ({restaurants: state.restaurants.records});
const selectLoadRestaurants = {loadRestaurants};

export default connect(
  selectRestaurants,
  selectLoadRestaurants,
)(RestaurantList);
