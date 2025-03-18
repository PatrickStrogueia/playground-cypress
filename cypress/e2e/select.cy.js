describe('select', () => {
    beforeEach(() => {
        cy.goHome();
        cy.doLogin();
        cy.goTo('/select', 'Select');
    });

    it('deve selecionar o cypress', () => {
        cy.contains('label', 'Selecione um Framework de Testes')
            .parent()
            .find('select')
            .select('Cypress');
    });

    it('deve selecionar as linguagens que utilizam node.js', () => {
        // const langs = ['JavaScript', 'TypeScript'];
        const langs = ['Java', 'TypeScript'];
        cy.get('input[placeholder^="Linguagens de programação"]').click();
        langs.forEach(lang => {
            cy.contains('.option-item', new RegExp("^" + lang + "$")).click();
        });
        cy.get('.language-item').should('have.length', langs.length);
    });
});