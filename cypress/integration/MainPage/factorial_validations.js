/// <reference types="cypress" />

describe('Testing Validations in the Factorial Web App', () => {
    beforeEach(() => {
        cy.visit('http://qainterview.pythonanywhere.com/')
    })

    it('TextBox should start with empty values', () => {
        cy.get('#number').should('have.value', '')
    })

    it('Should display an error on the page if no values provided', () => {
        cy.get('#getFactorial').click()
        cy.get('#number').should('have.css', 'border', '2px solid rgb(255, 0, 0)')
        cy.get('#resultDiv').should('contain', 'Please enter an integer')
        cy.get('#resultDiv').should('have.css', 'color', 'rgb(255, 0, 0)')
    })

    it('Should calculate the factorial of a number after pressing enter', () => {
        cy.get('#number').type('0{enter}').should('have.value', '0')
        cy.get('#resultDiv').should('have.value', 'The factorial of 0 is: 1')
    })

    it('Should show an error message if a negative value is provided', () => {
        cy.get('#number').type('-1').should('have.value', '-1')
        cy.get('#getFactorial').click();
        cy.get('#resultDiv').should('contain', 'Please enter a positive integer')
    })

    it('Should clear the factorial texbox after clicking on the calculate button', () => {
        cy.get('#number').type('0').should('have.value', '0')
        cy.get('#getFactorial').click()
        cy.get('#number').should('have.value', '')
    })

    it('Should show an error message if a string value is provided', () => {
        cy.get('#number').type('0sa 45').should('have.value', '0sa 45')
        cy.get('#getFactorial').click()
        cy.get('#resultDiv').should('contain', 'Please enter a positive integer')
    })
})