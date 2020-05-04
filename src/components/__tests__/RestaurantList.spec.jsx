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
  let loadRestaurants;
  let context;

  const renderWithProps = (propsOverrides = {}) => {
    const props = {
      loadRestaurants: jest.fn().mockName('loadRestaurants'),
      restaurants,
      loading: false,
      ...propsOverrides,
    };
    loadRestaurants = props.loadRestaurants;
    context = render(<RestaurantList {...props} />);
  };

  it('loads restaurants on first render', () => {
    renderWithProps();
    // Assert: check the function was called
    expect(loadRestaurants).toHaveBeenCalled();
  });

  it('displays restaurants', () => {
    // Act
    renderWithProps();
    const {queryByText} = context;
    // Assert: find an element containing the passed-in text if not found returns null
    expect(queryByText(sushiPlace)).not.toBeNull();
    expect(queryByText(saladPlace)).not.toBeNull();
  });

  it('displays the loading indicator while loading', () => {
    renderWithProps({loading: true});
    const {queryByTestId} = context;
    expect(queryByTestId('loading-indicator')).not.toBeNull();
  });

  describe('when loading succeeds', () => {
    beforeEach(() => {
      renderWithProps();
    });

    it('does not displays the loading indicator while not loading', () => {
      const {queryByTestId} = context;
      expect(queryByTestId('loading-indicator')).toBeNull();
    });

    it('displays the restaurants', () => {
      const {queryByText} = context;

      expect(queryByText(sushiPlace)).not.toBeNull();
      expect(queryByText(saladPlace)).not.toBeNull();
    });

    it('does not display the error message', () => {
      const {queryByText} = context;
      expect(queryByText('Restaurants could not be loaded')).toBeNull();
    });
  });

  describe('when loading fails', () => {
    beforeEach(() => {
      renderWithProps({loadError: true});
    });

    it('displays the error message', () => {
      const {queryByText} = context;
      expect(queryByText('Restaurants could not be loaded.')).not.toBeNull();
    });
  });
});
