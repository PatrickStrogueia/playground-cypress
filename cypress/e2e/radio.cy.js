describe('radio buttons', () => {
    beforeEach(() => {
        cy.goHome();
        cy.login('papito@cyskills.com.br', 'showtime');
        cy.userLoggedIn();
        cy.goTo('/radio', 'Radio Buttons');
    });

    it('deve marcar o framework usado no curso cypress skills', () => {
        cy.contains('label', 'Cypress').click();
    });
});