describe('Elementos básicos', () => {
    it('Texto', () => {
      cy.visit('https://automacao.qacoders-academy.com.br/'); 
      cy.get('body').should('contain', 'Primeiro');
      cy.get('form div p').should('contain','Primeiro');
      cy.get('form div p').should('have.text', 'Primeiro Acesso?');

    });
  
    it('Link...', () => {
      cy.visit('https://qacoders.com.br/'); 

      cy.get('[href~="https://www.linkedin.com/company/qa-coders/"]')
    });
  });