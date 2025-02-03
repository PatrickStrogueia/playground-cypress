//// <reference types='cypress'/>

describe('login', () => {
  beforeEach(() => {
    cy.goHome();
  });

  it('deve logar com sucesso', () => {
    cy.login('papito@cyskills.com.br', 'showtime');
    cy.get('[data-cy="welcome-title"]')
      .should('be.visible')
      .and('have.text', 'Boas vindas ao Cypress Playground');
  });

  it('não deve logar com senha inválida', () => {
    cy.login('papito@cyskills.com.br', 'abc123');
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!');
  });

  it('não deve logar com e-mail não cadastrado', () => {
    cy.login('404@cyskills.com.br', 'abc123');
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!');
  });

  it('não deve logar com e-mail incorreto', () => {
    cy.login('www.cyskills.com.br', 'abc123');
    cy.noticeHave('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!');
  });
});