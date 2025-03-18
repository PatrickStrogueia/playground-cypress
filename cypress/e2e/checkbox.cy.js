describe('checkbox', () => {
    beforeEach(() => {
        cy.goHome();
        cy.doLogin();
        cy.goTo('/checkbox', 'Checkbox');
    });

    it('deve preencher o campo de área de texto', () => {
        cy.get('input[value="1"]')
            .parent()
            .click();
        cy.get('label[for="typescript"]').click();
    });

    it('deve marcar todas as opções', () => {
        const langs = ['javascript', 'python', 'rust', 'go', 'typescript'];
        langs.forEach(lang => {
            cy.get(`label[for="${lang}"]`).click();
        });
    });
});
