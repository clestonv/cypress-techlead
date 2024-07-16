// definições de tipos para o objeto "cy" do Cypress
/// <reference types="cypress" />

const home = require('../fixtures/home.json');

Cypress.Commands.add('loginSuccess', (email, password) => { 
    cy.fixture('login').then((selector) =>{
        cy.get(selector.emailInput).should('be.visible').type(email);
        cy.get(selector.passwordInput).should('be.visible').type(password);
        cy.get(selector.btnLogin).should('have.text', 'Entrar').click();
        cy.get(home.btnLogout).should('contain','Logout')
    })
})

Cypress.Commands.add('loginFail', (email, password) => { 
    cy.fixture('login').then((selector) => {        
        cy.get(selector.emailInput).should('be.visible').type(email);
        cy.get(selector.passwordInput).should('be.visible').type(password);
        cy.get(selector.btnLogin).should('have.text', 'Entrar').click();
        cy.get(selector.Alert).should('be.visible')
    })
})