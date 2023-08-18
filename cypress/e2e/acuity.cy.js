const { selectors } = require('../support/utils/selectors');

describe('Acuity frontsite tests', () => {
  beforeEach(() => {
    cy.visit('https://acuityscheduling.com/');
  })

  
  it('opens pricing page', () => {
    cy.get('a').contains('Pricing').click();
    cy.get('h1').should('have.text', 'Grow Your Business, Even While You Sleep');
    cy.get(selectors.emergingTitle).should('have.text', 'Emerging');
    cy.get(selectors.emergingSignUpButton).should('be.visible').click();
  }),

  it('views homepage', () => {
    cy.get(selectors.acuityLogo).should('be.visible');
    cy.get(selectors.trySchedulingButton).should('be.visible');
    cy.get('h1').should('be.visible');
    cy.get(selectors.signUpButton).scrollIntoView().should('be.visible');
  }),

  it('changes language', () => {
    cy.get(selectors.languageSelector).scrollIntoView().select('Italiano');
    cy.get(selectors.pageTitle)
      .should('have.text', 'Tutto il necessario per ogni tipo di pianificazione');
  })
})
