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
  it('can search for domain', () => {
    const domainName = 'bigdeliciousdomainnamefortesting101'
    
    cy.get('[aria-label="search"]')
      .clear().should('have.value', '')
      .type(domainName).should('have.value', domainName)

    cy.get('.featured-wrapper > :nth-child(1)')
      .should('have.class', 'domains-item')
      // check domain is not selected
      .should('have.class', 'available')
      .and('not.have.class', 'selected')
      // check domain is selected after click
      .click().should('have.class', 'selected')

    cy.get('.total')
      .should('be.visible')
      .and('have.text', '1 domain - £16')

    cy.get('.checkout')
      .should('have.text', 'continue to checkout')
      .and('be.visible')
  })
})