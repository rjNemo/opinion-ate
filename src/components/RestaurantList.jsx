import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import {loadRestaurants} from '../store/restaurants/actions';

export const RestaurantList = ({
  restaurants,
  loadRestaurants,
  loading,
  loadError,
}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <div>
      {loading && <CircularProgress data-testid="loading-indicator" />}
      {loadError && (
        <Alert severity="error">Restaurants could not be loaded.</Alert>
      )}
      <List>
        {restaurants.map(r => (
          <ListItem key={r.id}>
            <ListItemText>{r.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const selectState = state => ({
  restaurants: state.restaurants.records,
  loading: state.restaurants.loading,
  loadError: state.restaurants.loadError,
});
const selectLoadRestaurants = {loadRestaurants};

export default connect(selectState, selectLoadRestaurants)(RestaurantList);
