import React from 'react';
import {render} from '@testing-library/react';
import {RestaurantList} from '../RestaurantList';

describe('RestaurantList', () => {
  it('loads restaurants on first render', () => {
    // Arange: it will ask to load Restaurants
    const loadResto = jest.fn().mockName('loadRestaurants');
    // Act: render component
    render(<RestaurantList loadRestaurants={loadResto} />);
    // Assert: check the function was called
    expect(loadResto).toHaveBeenCalled();
  });

  //   it('displays restaurants', () => {});
});
