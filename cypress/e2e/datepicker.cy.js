describe('date picker', () => {
    beforeEach(() => {
        cy.goHome();
        cy.login('papito@cyskills.com.br', 'showtime');
        cy.userLoggedIn();
        cy.goTo('/date-picker', 'Date Picker');
    });

    it('deve adicionar algumas tags', () => {
        cy.get('input[placeholder="Escolha uma data"][readonly]')
            .click();
        cy.get('select[aria-label="Month"]')
            .select('Setembro');
        cy.get('input[aria-label="Year"]')
            .type('1992');
        cy.get('span[aria-label="Setembro 22, 1992"]')
            .click();
    });
});