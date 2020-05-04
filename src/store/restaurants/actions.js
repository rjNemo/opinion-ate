export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';
export const START_LOADING = 'START_LOADING';
export const RECORDS_LOADING_ERROR = 'RECORDS_LOADING_ERROR';

export const loadRestaurants = () => (dispatch, getState, api) => {
  dispatch(startLoading());
  api
    .loadRestaurants()
    .then(rec => {
      dispatch(storeRestaurants(rec));
    })
    .catch(() => {
      dispatch(recordLoadingError());
    });
};

const startLoading = () => ({type: START_LOADING});

const storeRestaurants = records => ({
  type: STORE_RESTAURANTS,
  records,
});

const recordLoadingError = () => ({type: RECORDS_LOADING_ERROR});

export const createRestaurant = name => (dispatch, getState, api) => {
  api.createRestaurant(name);
};
