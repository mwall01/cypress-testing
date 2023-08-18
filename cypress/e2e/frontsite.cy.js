import { selectors } from "../support/utils/selectors"

describe('frontsite tests', () => {
  beforeEach(() => {
    cy.visit('https://www.squarespace.com/')
  })
  
  it('displays Squarespace logo', () => {
    cy.get(selectors.logo)
      .should('have.text', 'Everything to sell anything')
  })

  it('can view Get Started menu', () => {
    cy.get('a').contains('Get Started')
    // cy.get('button').contains('Get Started')
      .should('exist')
      .click({ force: true })

    cy.get('span').contains('Skip').click();
    cy.get('span').contains('Skip').click();
    
    cy.get(selectors.productsDropdown)
      .should('exist')
      // .and('contains', 'Products')
    
    cy.get('[data-identifier="templates-cta"]')
    .should('exist')
    // .should('contains', 'Templates')

    cy.get(selectors.resourcesDropdown)
      .should('exist')
      // .should('contains', 'Resources')
  })

  it('can open template store', () => {
    // cy.get('[aria-label="Navigation menu"]')
    //   .click()

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