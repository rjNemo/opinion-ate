import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import {loadRestaurants} from '../store/restaurants/actions';

export const RestaurantList = ({restaurants, loadRestaurants, loading}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <>
      {loading && <CircularProgress data-testid="loading-indicator" />}
      <List>
        {restaurants.map(r => (
          <ListItem key={r.id}>
            <ListItemText>{r.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
};

const selectState = state => ({
  restaurants: state.restaurants.records,
  loading: state.restaurants.loading,
});
const selectLoadRestaurants = {loadRestaurants};

export default connect(selectState, selectLoadRestaurants)(RestaurantList);
