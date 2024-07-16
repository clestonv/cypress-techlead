// definições de tipos para o objeto "cy" do Cypress
/// <reference types="cypress" />

const home = require('../fixtures/home.json');

Cypress.Commands.add('login', (email, login) => { 
    cy.fixture('login').then((selector) =>{
        cy.get(selector.emailInput).should('be.visible').type(email);
        cy.get(selector.passwordInput).should('be.visible').type(login);
        cy.get(selector.btnLogin).should('have.text', 'Entrar').click();
        cy.get(home.btnLogout).should('contain','Logout')
    })
})

Cypress.Commands.add('loginFail', (email, login) => { 
    cy.fixture('login').then((selector) =>{
        cy.get(selector.emailInput).should('be.visible').type(email);
        cy.get(selector.passwordInput).should('be.visible').type(login);
        cy.get(selector.btnLogin).should('have.text', 'Entrar').click();
        cy.get(selector.Alert).should('be.visible')
    })
})