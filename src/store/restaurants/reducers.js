import {combineReducers} from 'redux';
import {
  START_LOADING,
  STORE_RESTAURANTS,
  RECORDS_LOADING_ERROR,
  ADD_RESTAURANT,
} from './actions';

const records = (state = [], action) => {
  switch (action.type) {
    case STORE_RESTAURANTS:
      return action.records;
    case ADD_RESTAURANT:
      return [...state, action.record];
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case START_LOADING:
      return true;
    case STORE_RESTAURANTS:
    case RECORDS_LOADING_ERROR:
      return false;
    default:
      return state;
  }
};

const loadError = (state = false, action) => {
  switch (action.type) {
    case RECORDS_LOADING_ERROR:
      return true;
    case START_LOADING:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  records,
  loading,
  loadError,
});
