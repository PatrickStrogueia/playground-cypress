/// <reference types='cypress'/>

describe('login', () => {
  it('deve logar com sucesso', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://playground.cyskills.com.br');
    cy.contains('h2', 'Faça login').should('be.visible');
    cy.get('[data-cy="email"]').type('papito@cyskills.com.br');
    cy.get('[data-cy="password"]').type('showtime');
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="welcome-title"]')
      .should('be.visible')
      .and('have.text', 'Boas vindas ao Cypress Playground');
  });

  it('não deve logar com sucesso', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://playground.cyskills.com.br');
    cy.contains('h2', 'Faça login').should('be.visible');
    cy.get('[data-cy="email"]').type('papito@cyskills.com.br');
    cy.get('[data-cy="password"]').type('abc123');
    cy.get('[data-cy="login-button"]').click();
    cy.get('.notice p')
      .should('be.visible')
      .and('have.text', 'E-mail ou senha incorretos. Por favor, tente novamente!');
  });

  it('não deve logar com e-mail não cadastrado', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://playground.cyskills.com.br');
    cy.contains('h2', 'Faça login').should('be.visible');
    cy.get('[data-cy="email"]').type('404@cyskills.com.br');
    cy.get('[data-cy="password"]').type('abc123');
    cy.get('[data-cy="login-button"]').click();
    cy.get('.notice p')
      .should('be.visible')
      .and('have.text', 'E-mail ou senha incorretos. Por favor, tente novamente!');
  });

  it('não deve logar com e-mail incorreto', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://playground.cyskills.com.br');
    cy.contains('h2', 'Faça login').should('be.visible');
    cy.get('[data-cy="email"]').type('www.cyskills.com.br');
    cy.get('[data-cy="password"]').type('abc123');
    cy.get('[data-cy="login-button"]').click();
    cy.get('.notice p')
      .should('be.visible')
      .and('have.text', 'O formato do e-mail está incorreto. Por favor, verifique e tente novamente!');
  });
});