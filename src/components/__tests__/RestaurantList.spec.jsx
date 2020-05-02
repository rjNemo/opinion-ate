import React from 'react';
import {render} from '@testing-library/react';
import {RestaurantList} from '../RestaurantList';

describe('RestaurantList', () => {
  it('loads restaurants on first render', () => {
    // Arange: it will ask to load Restaurants
    const loadResto = jest.fn().mockName('loadRestaurants');
    // Act: render component
    render(<RestaurantList loadRestaurants={loadResto} restaurants={[]} />);
    // Assert: check the function was called
    expect(loadResto).toHaveBeenCalled();
  });

  it('displays restaurants', () => {
    // we don't test loadRestaurant function here so a noop fits
    const noop = () => {};
    const restaurants = [
      {id: 1, name: 'Sushi Place'},
      {id: 2, name: 'Salad Place'},
    ];
    // Act
    const {queryByText} = render(
      <RestaurantList loadRestaurants={noop} restaurants={restaurants} />,
    );
    // Assert: find an element containing the passed-in text if not found returns null
    expect(queryByText('Sushi Place')).not.toBeNull();
    expect(queryByText('Salad Place')).not.toBeNull();
  });
});
