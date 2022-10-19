describe('templates page tests', () => {
  beforeEach(() => {
    cy.visit('https://www.squarespace.com/templates')
  })

  it('navigates template store', () => {
    const onlineStoreTemplates = 'https://www.squarespace.com/templates/browse/topic/popular-designs/type/online-store'
    cy.get('[data-test="surveyInterstitial-exitbutton"]')
      .should('have.text', 'I\'m just browsing')
      .click()

    // querying part of a string in the header
      cy.get('[data-test="Hero"]')
      .should('contain', 'Make any template yours with ease.')
      .and('be.visible')

    cy.get('[data-test="CategoryList-toggle-overlay-button"]')
      .should('be.visible')
      .click()
    
    cy.get('[data-test="FiltersOverlay-cancel"]')
      .should('have.text', 'Cancel')
    
    cy.get('[data-test="FiltersMobileMenu-accordion-toggle"]')
      .first()
      .should('be.visible')
      .click()

    // cy.get('[p="Online Store"]')
    cy.get('p').contains('Online Store')
      .should('be.visible')
      .click()

    cy.get('[data-test="FiltersOverlay-apply"]')
      .should('be.visible')
      .click()
    
    cy.url()
      .should('eq', onlineStoreTemplates)
  })
})