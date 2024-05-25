describe('Posts by category tests', () => {
  beforeEach(() => {
    cy.visit('/category/startup');
  });
  it('should render correct category info', () => {
    cy.get('h1').contains('Startup');
  });
  it('should show posts on searchbar value', () => {
    const input = cy.get('[data-cy=search-category-input]');
    input.type('s');
    cy.get('[data-cy=post-item]').should('have.length', 2);
    input.clear();
    input.type('life');
    cy.get('[data-cy=post-item]').should('have.length', 0);
    input.clear();
  });
  it('should handle tag click', () => {
    const clearTags = cy.get('[data-cy=clear-tags-button]');
    cy.get("[data-cy='Life']").click();
    cy.get('h2').contains('No posts').should('exist');
    clearTags.click();
    cy.get("[data-cy='Startup']").click();
    cy.get("[data-cy='blog-post-card']").should('have.length', 2);
  });
});
