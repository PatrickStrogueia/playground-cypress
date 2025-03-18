describe('textarea', () => {
    beforeEach(() => {
        cy.goHome();
        cy.doLogin();
    });

    it('deve preencher o campo de área de texto', () => {
        cy.goTo('/textarea', 'Textarea');
        cy.get('textarea[name="message"]').type('Olá, mundo!');
    });
});
