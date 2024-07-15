/// <reference types="cypress">

describe('Example Fixture', () => {
    it('Login Fixture - Falha', function () {
        cy.visit('https://automacao.qacoders-academy.com.br/login');  

        cy.fixture('person').as('user').then(() => {
            cy.get('#email').type(this.user.nome)
            cy.get('#password').type(this.user.senha)
            cy.get('#login').click()

            cy.get('.css-18xtib3').should('contain','Digite')
            console.log(this.user.nome);
            console.log(this.user.senha);
        })

    });
    it('Login Fixture - Sucesso', function () {
        cy.visit('https://automacao.qacoders-academy.com.br/login');  

        cy.fixture('admin').as('adm').then(() => {
            cy.get('#email').type(this.adm.mail )
            cy.get('#password').type(this.adm.password, {log: false})
            cy.get('#login').click() 
            cy.get('.css-1nvbq2d').should('contain','Logout')
        })

    });
    
});