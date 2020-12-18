/// <reference types="cypress" />

describe('Testing Wording in the Factorial Web App', () => {
    beforeEach(() => {
        cy.visit('http://qainterview.pythonanywhere.com/')
    })

    it('The browser title should be Factorial', () => {
        cy.title().should('eq', 'Factorial')
    })

    it('Main title of the app should be The greatest factorial calculator!', () => {
        cy.contains('The greatest factorial calculator!')
    })

    it('Texbox should contain Enter an integer as placeholder', () => {
       cy.get('#number')
       .should('have.attr', 'placeholder', 'Enter an integer')
    })

    it('Button should contain the text Calculate!', () => {
       cy.get('#getFactorial').should('contain', 'Calculate!')
    })

    it('Should contain a hyperlink called Terms and Conditions', () => {
        cy.get('.wor_copyright').contains('a', 'Terms and Conditions');
    })

    it('Should contain a hyperlink called Privacy', () => {
        cy.get('.wor_copyright').contains('a', 'Privacy');
    })

    it('Should contain a hyperlink called Qxf2 Services', () => {
        cy.get('.wor_copyright').contains('a', 'Qxf2 Services');
    })

    it('Copyright date range should be 2013 - 2020', () => {
       cy.contains('2013');
       cy.contains('2020');
    })
})