describe('input fields', () => {
    beforeEach(() => {
        cy.goHome();
    });

    it('deve preencher o campo texto', () => {
        cy.login('papito@cyskills.com.br', 'showtime');
        cy.userLoggedIn();
        cy.get('nav a[href="/input-fields"]').click();
        cy.contains('h2', 'Input Fields').should('be.visible');
        cy.get('input[placeholder="John Doe"]').type('Patrick Strogueia');
        cy.get('input[name="email"]').type('patrickdealcantara@gmail.com');
        cy.get('input[name="number"]').type('2025');
        cy.get('input[name="date"]').type('2025-02-03');
    });
});