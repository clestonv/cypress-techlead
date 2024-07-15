// definições de tipos para o objeto "cy" do Cypress
/// <reference types="cypress" />
describe('Tela Login', () => {
  it('CT001 - Validar Campo Email', () => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
    cy.get('#email').should('be.visible')
  })
  //TODO CT002 - Validar Input Senha
  it('CT002 - Validar Input Senha', () => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
    cy.get('#password').should('be.visible')
  })
  //TODO CT003 - Validar Botão Entrar
  it('CT003 - Validar Botão Entrar', () => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
    cy.get('#login').should('have.text', 'Entrar')
  })
  // TODO CT004 - Validar Link Primeiro Acesso
  it('CT004 - Validar Link Primeiro Acesso', () => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
    cy.get('.css-1d4tukr').should('have.text', 'Primeiro Acesso?Acesse aqui')
    cy.get('.css-1d4tukr').should('be.visible')
  })
})