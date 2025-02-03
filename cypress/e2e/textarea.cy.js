describe('textarea', () => {
    beforeEach(() => {
        cy.goHome();
    });

    it('deve preencher o campo de área de texto', () => {
        cy.login('papito@cyskills.com.br', 'showtime');
        cy.userLoggedIn();
        cy.goTo('/textarea', 'Textarea');
        cy.get('textarea[name="message"]').type('Olá, mundo!');
    });
});
