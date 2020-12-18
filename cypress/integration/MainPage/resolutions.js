/// <reference types="cypress" />

describe('Testing Screen Resolution for the Factorial Web App', () => {
  beforeEach(() => {
    cy.visit('http://qainterview.pythonanywhere.com/')
  })

  it('Should render in a Macbook-15', () => {
    cy.viewport('macbook-15')
    cy.screenshot()
  })

  it('Should render in a Macbook-13', () => {
      cy.viewport('macbook-13')
      cy.screenshot()

  })

  it('Should render in a Ipad-2', () => {
      cy.viewport('ipad-2')
      cy.screenshot()

  })

  it('Should render in an Iphone 6', () => {
      cy.viewport('iphone-6')
      cy.screenshot()

  })

  it('Should render in a Samsung S10', () => {
      cy.viewport('samsung-s10')
      cy.screenshot()

  })

  it('Should render on  1080p resolution', () => {
      cy.viewport(1920,1080)
      cy.screenshot()

  })
})