// definições de tipos para o objeto "cy" do Cypress
/// <reference types="cypress" />
const login = require('../fixtures/login.json');

describe('Tela Login', () => {
  beforeEach(() => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
})
  it('CT001 - Validar Campo Email', () => {
    cy.get(login.emailInput).should('be.visible')
  })
  it('CT002 - Validar Input Senha', () => {
    cy.get(login.passwordInput).should('be.visible')
  })
  it('CT003 - Validar Botão Entrar', () => {
    cy.get(login.btnLogin).should('have.text', 'Entrar')
  })
  // TODO CT004 - Ajustar validação deste teste
  it('CT004 - Validar Link Primeiro Acesso', () => {
    cy.get(login.labelCad).should('be.visible')
    cy.get(login.labelCad).should('have.text', 'Primeiro Acesso?Acesse aqui')    
  })

  it('CT005 - Validar Login com Sucesso', () => {
    const email = Cypress.env('email')
    const password = Cypress.env('password')
    cy.loginSuccess(email, password);
  });
  it('CT006 - Validar Login com Falha', () => {
    cy.loginFail(Cypress.env('emailFake'),'1234@T');
  });
})