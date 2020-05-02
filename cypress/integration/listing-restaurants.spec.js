describe('Restaurant list', () => {
  it('shows restaurants from the server', () => {
    const pastaPlace = 'Sushi Place';
    const saladPlace = 'Salad Place';

    // prevent accessing real backend
    cy.server({force404: true});

    cy.route({
      method: 'GET',
      url:
        'https://api.outsidein.dev/wRLRwKdVZ9N7ei4PeyIyWOG9Sj8hYZAa/restaurants',
      response: [
        {id: 1, name: pastaPlace},
        {id: 2, name: saladPlace},
      ],
    });

    // visit root url
    cy.visit('/');
    cy.contains(pastaPlace);
    cy.contains(saladPlace);
  });
});
