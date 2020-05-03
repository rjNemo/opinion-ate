import React from 'react';
import {render} from '@testing-library/react';
import {RestaurantList} from '../RestaurantList';

describe('RestaurantList', () => {
  // constants
  const sushiPlace = 'Sushi Place';
  const saladPlace = 'Salad Place';
  const restaurants = [
    {id: 1, name: sushiPlace},
    {id: 2, name: saladPlace},
  ];
  let loadResto;
  let context;

  beforeEach(() => {
    loadResto = jest.fn().mockName('loadRestaurants');
    // Act: render component
    context = render(
      <RestaurantList loadRestaurants={loadResto} restaurants={restaurants} />,
    );
  });

  it('loads restaurants on first render', () => {
    // Assert: check the function was called
    expect(loadResto).toHaveBeenCalled();
  });

  it('displays restaurants', () => {
    // Act
    const {queryByText} = context;
    // Assert: find an element containing the passed-in text if not found returns null
    expect(queryByText(sushiPlace)).not.toBeNull();
    expect(queryByText(saladPlace)).not.toBeNull();
  });
});
