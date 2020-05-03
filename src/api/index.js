import axios from 'axios';
const key = 'wRLRwKdVZ9N7ei4PeyIyWOG9Sj8hYZAa';
const client = axios.create({
  baseURL: `https://api.outsidein.dev/${key}`,
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(res => res.data);
  },
};
export default api;
