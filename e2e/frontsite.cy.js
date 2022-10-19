describe('frontsite tests', () => {
  beforeEach(() => {
    cy.visit('https://www.squarespace.com/')
  })
  
  it('displays Squarespace logo', () => {
    cy.get('.hero__text > h1')
      .should('have.text', 'Everything to sell anything')
  })

  it('can view Get Started menu', () => {
    cy.get('[aria-label="Navigation menu"]')
      .should('exist')
      .click()

    cy.get('[aria-label="Products dropdown menu"]')
      .should('contains', 'Products')
    
    cy.get('[data-identifier="templates-cta"]')
      .should('contains', 'Templates')

    cy.get('[aria-label="Resources dropdown menu"]')
      .should('contains', 'Resources')
  })

  it('can open template store', () => {
    cy.get('[aria-label="Navigation menu"]')
      .click()

    cy.get('[data-identifier="cta"]')
      .first()
      .click({ force: true })

    cy.url()
      .should('eq', 'https://www.squarespace.com/templates')

    cy.get('[data-test="surveyInterstitial-exitbutton"]')
      .click() 

    cy.get('[class="Hero-Title-DIIYh"]')
      .should('have.text', 'Make any template yours with ease.')
  })
})