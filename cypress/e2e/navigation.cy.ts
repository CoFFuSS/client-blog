import { navLinks } from '../../src/constants/navLinks';

describe('Navigation tests', () => {
  navLinks.forEach(({ href, name }) => {
    it(`should navigate to ${name}`, () => {
      cy.visit('/');
      cy.get('a')
        .contains(new RegExp(`^${name}$`))
        .click();
      cy.url().should('include', href);
    });
  });
});
