/// <reference types="cypress">

describe('Cypress basics', () => {
    it('Deve Visitar uma pagina e validar o Titulo', () => {
         cy.visit('https://automacao.qacoders-academy.com.br/login'); 
         // const title = cy.title();
         // console.log(title);
         
         cy.title().should('be.equal','Academy')
         cy.title().should('contain','Academy');
         
         cy.pause()
         // Duas validações
         cy.title()
                 .should('be.equal','Academy')
                 .should('contain','Academy');
                 
           // Mais legibilidade
         cy.title()
         .should('be.equal','Academy')
         .and('contain','Academy');

         cy.get('#login')
         .should('contain','Entrar')
         .click();
         
    });
  });