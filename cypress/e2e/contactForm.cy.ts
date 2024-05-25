describe('Contact form tests', () => {
  beforeEach(() => {
    cy.visit('/contact');
  });

  it('should validate and send form data', () => {
    cy.get('[data-cy=full-name-input]').type('Adfdgfsfg');
    cy.get('[data-cy=email-input]').type('danilakupchin@gmail.com');
    cy.get('textarea').type('Short message');

    cy.get('[data-cy=textarea-error]').should('exist');

    cy.get('[data-cy=full-name-input]').clear();
    cy.get('[data-cy=email-input]').clear();
    cy.get('textarea').clear();

    cy.get('[data-cy=full-name-input]').type('Valid Name');
    cy.get('[data-cy=email-input]').type('danikk066@example.com');
    cy.get('textarea').type('Valid message that is longer than 30 ABOBA.');

    cy.get('textarea')
      .closest('form')
      .within(() => {
        cy.get('button[type=submit]').click();
      });

    cy.wait(2000);

    cy.get('[data-cy=success]').should('exist');
  });
});
