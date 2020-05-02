describe('Smoke test', () => {
  it('can see Homepage', () => {
    cy.visit('/');
    cy.contains('Learn React');
  });
});
