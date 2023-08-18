import { selectors } from "../support/utils/selectors";

describe('domains tests', () => {
  beforeEach(() => {
    cy.visit('https://squarespace.com/domain-name-search')
  })

  // couple of API tests
  it('checks http status of domains page', () => {
    cy.request('https://squarespace.com/domain-name-search')
      .should((response) => {
        expect(response.status).to.eq(200)
      })

    cy.request('api/domain-search/site-title-suggestions')
      .should((response) => {
        expect(response.status).to.eq(200)
      })
  })
  
  // UI test which verifies user can search & select a domain
  it.skip('can search for domain', () => {
    const domainName = 'bigdeliciousdomainnamefortesting101'
    
    cy.get(selectors.domainSearch)
      .clear().should('have.value', '')
      .type(domainName).should('have.value', domainName);

    cy.get(selectors.domainResult)
      .should('be.visible')
      .and('not.have.class', 'selected')
      .first().click({ force: true });

    cy.get(total)
      .should('be.visible')
      .and('have.text', '1 domain - £16');

    cy.get(selectors.checkoutButton)
      .should('have.text', 'continue to checkout')
      .and('be.visible');
  })
})