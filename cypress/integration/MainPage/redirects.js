/// <reference types="cypress" />

describe('Testing link redirects on the Factorial Web App', () => {
    beforeEach(() => {
        cy.visit('http://qainterview.pythonanywhere.com/')
    })

    it('Terms and Conditions hyperlink should redirect to the Terms and Conditions page', () => {
        cy.get('a').eq(0).click()
        cy.url().should('eq', 'http://qainterview.pythonanywhere.com/terms')
    })

    it('Privacy hyperlink should redirect to the privacy page', () => {
         cy.get('a').eq(1).click()
         cy.url().should('eq', 'http://qainterview.pythonanywhere.com/privacy')
    })

    it('Qxf2 Services hyperlink should redirect to Qxf2 Services Landing Page', () => {
         cy.get('a')
         .eq(2)
         .should('have.prop', 'href')
         .and('include', 'https://www.qxf2.com/?utm_source=qa-interview&utm_medium=click&utm_campaign=From%20QA%20Interview')
    })
})