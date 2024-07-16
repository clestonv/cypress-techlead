describe('form', () => {
    it.skip('formulatio teste', () => {
        cy.visit('http://localhost:5500/index.html');

        cy.get('section button:eq(2)')
        cy.get(':nth-child(1) > div > section > :nth-child(1)')

        cy.get('label:contains(Leitura)').should('be.visible')
    });
});