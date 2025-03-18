Cypress.Commands.add('goHome', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://playground.cyskills.com.br');
    cy.contains('h2', 'Faça login').should('be.visible');
});

// Helper
Cypress.Commands.add('doLogin', () => {
    cy.login('papito@cyskills.com.br', 'showtime');
    cy.userLoggedIn();
});

Cypress.Commands.add('login', (email, password) => {
    if (email) {
        cy.get('[data-cy="email"]').type(email);
    }
    if (password) {
        cy.get('[data-cy="password"]').type(password);
    }
    cy.get('[data-cy="login-button"]').click();
});

Cypress.Commands.add('userLoggedIn', () => {
    cy.get('[data-cy="welcome-title"]')
        .should('be.visible')
        .and('have.text', 'Boas vindas ao Cypress Playground');
});

Cypress.Commands.add('noticeHave', (text) => {
    cy.get('.notice p')
        .should('be.visible')
        .and('have.text', text);
});

Cypress.Commands.add('goTo', (route, title) => {
    cy.get(`nav a[href="${route}"]`).click();
    cy.contains('h2', title).should('be.visible');
});