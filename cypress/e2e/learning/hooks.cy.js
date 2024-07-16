describe('teste de hooks', () => {

    before(() => {
        cy.log('before hook')  
    })
    
    beforeEach(() => {
        cy.log('beforeEach hook')
    })

    it('teste #1', () => {
        cy.log('teste #1')
    })

    it('teste #2', () => {
        cy.log('teste #2')
    })

    it('teste #3', () => {
       cy.log('teste #3')
    })
})