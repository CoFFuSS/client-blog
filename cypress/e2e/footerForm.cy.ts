describe('Footer form tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should send email data through the footer form', () => {
    cy.get('[data-cy=subscribes-email-input]').type('danikk066@exemple.ru');

    cy.get('[data-cy=subscribes-email-input]')
      .closest('form')
      .within(() => {
        cy.get('button[type=submit]').click();
      });
  });
});
