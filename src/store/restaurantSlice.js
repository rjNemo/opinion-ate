import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// export const loadRestaurants = () => async dispatch => {
//   const rec = [{id: 0, name: 'test'}];
//   dispatch(storeRestaurants(rec));
// };

export const loadRestaurants = createAsyncThunk(
  'restaurant/loadRestaurants',
  async () => {
    return [{id: 0, name: 'test'}];
    // dispatch(storeRestaurants(rec));
  },
);

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    records: [],
  },
  reducers: {
    // storeRestaurants: (state, action) => ({
    //   records: action.payload,
    // }),
  },
  extraReducers: {
    [loadRestaurants.fulfilled]: (state, action) => ({
      records: action.payload,
    }),
  },
});

export const {storeRestaurants} = restaurantSlice.actions;

export default restaurantSlice.reducer;
