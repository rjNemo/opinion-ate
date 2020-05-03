export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';

export const loadRestaurants = () => (dispatch, getState, api) => {
  api.loadRestaurants().then(rec => {
    dispatch(storeRestaurants(rec));
  });
};

const storeRestaurants = records => ({
  type: STORE_RESTAURANTS,
  records,
});
