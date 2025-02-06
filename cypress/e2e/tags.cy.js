describe('tags', () => {
    beforeEach(() => {
        cy.goHome();
        cy.login('papito@cyskills.com.br', 'showtime');
        cy.userLoggedIn();
        cy.goTo('/tags', 'Tags');
    });

    it('deve adicionar algumas tags', () => {
        const tags = ['Cypress', 'JavaScript', 'Nodejs'];

        tags.forEach(t => {
            cy.get('.new-tag')
                .type(`${t}{Enter}`)
                .should('have.value', '');
            // cy.wait(500);
        });
        tags.forEach(t => {
            cy.get('.tag-input')
                .should('contain', t);
        });
    });
});