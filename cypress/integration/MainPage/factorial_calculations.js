/// <reference types="cypress" />

describe('Testing Calculations in the Factorial Web App', () => {
    beforeEach(() => {
        cy.visit('http://qainterview.pythonanywhere.com/')
    })

    it('Should calculate the factorial of 0 after clicking the calculate button', () => {
        cy.get('#number').type('0').should('have.value', '0')
        cy.get('#getFactorial').click();
        cy.get('#resultDiv').should('contain', 'The factorial of 0 is: 1')
    })

    it('Should calculate the factorial of 1 after clicking the calculate button', () => {
        cy.get('#number').type('1').should('have.value', '1')
        cy.get('#getFactorial').click();
        cy.get('#resultDiv').should('contain', 'The factorial of 1 is: 1')
    })

    it('Should calculate the factorial of 2 after clicking the calculate button', () => {
        cy.get('#number').type('2').should('have.value', '2')
        cy.get('#getFactorial').click();
        cy.get('#resultDiv').should('contain', 'The factorial of 2 is: 2')
    })

    it('Should calculate the factorial of 10 after clicking the calculate button', () => {
        cy.get('#number').type('10').should('have.value', '10')
        cy.get('#getFactorial').click();
        cy.get('#resultDiv').should('contain', 'The factorial of 10 is: 3628800')
    })

    it('Should calculate the factorial of 100 after clicking the calculate button', () => {
        cy.get('#number').type('100').should('have.value', '100')
        cy.get('#getFactorial').click();
        cy.get('#resultDiv').should('contain', 'The factorial of 100 is: 9.332621544394415e+157')
    })

    it('Should calculate the factorial of 1000 after clicking the calculate button', () => {
        cy.get('#number').type('1000').should('have.value', '1000')
        cy.get('#getFactorial').click();
        cy.get('#resultDiv').should('contain', 'The factorial of 1000 is: Infinity')
    })
})