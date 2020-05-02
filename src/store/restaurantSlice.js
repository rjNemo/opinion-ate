import {createSlice} from '@reduxjs/toolkit';

export const loadRestaurants = () => () => {};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    records: [],
  },
  reducers: {},
});

export const selectRestaurants = state => state.restaurant.records;

export default restaurantSlice.reducer;
