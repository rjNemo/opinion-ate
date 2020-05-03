import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {loadRestaurants} from '../store/restaurants/actions';

export const RestaurantList = ({restaurants, loadRestaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <List>
      {restaurants.map(r => (
        <ListItem key={r.id}>
          <ListItemText>{r.name}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

const selectRestaurants = state => ({restaurants: state.restaurants.records});
const selectLoadRestaurants = {loadRestaurants};

export default connect(
  selectRestaurants,
  selectLoadRestaurants,
)(RestaurantList);
