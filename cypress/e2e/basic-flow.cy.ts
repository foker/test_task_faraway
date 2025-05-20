describe('Basic User Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads the home page and displays loading state', () => {
    cy.get('[data-testid="star-wars-loading"]').should('be.visible');
  });

  it ('skip preview button should be visible', () => {
    cy.get('button').contains('Skip Preview').should('be.visible');
  });

  it('logo should be visible', () => {
    cy.get('h1').contains('Star Wars').should('be.visible');
  });
  
}); 