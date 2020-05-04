describe('Creating a restaurant', () => {
  it('allows to add a restaurant', () => {
    const restaurantID = 0;
    const restaurantName = 'Sushi Place';

    cy.server({force404: true});

    cy.route({
      method: 'GET',
      url:
        'https://api.outsidein.dev/wRLRwKdVZ9N7ei4PeyIyWOG9Sj8hYZAa/restaurants',
      response: [],
    });

    cy.route({
      method: 'POST',
      url:
        'https://api.outsidein.dev/wRLRwKdVZ9N7ei4PeyIyWOG9Sj8hYZAa/restaurants',
      response: {
        id: restaurantID,
        name: restaurantName,
      },
    }).as('addRestaurant');

    cy.visit('/');

    cy.get('[placeholder="Add Restaurant"]').type(restaurantName);
    cy.contains('Add').click();

    cy.wait('@addRestaurant')
      .its('requestBody')
      .should('deep.equal', {name: restaurantName});
    cy.contains(restaurantName);
  });
});
