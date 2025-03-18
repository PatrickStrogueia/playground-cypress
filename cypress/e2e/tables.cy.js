describe('tables', () => {
    beforeEach(() => {
        cy.goHome();
        cy.doLogin();
        cy.goTo('/tables', 'Tables');
    });

    it('deve validar a linha do github', () => {
        cy.contains('table tbody tr', '1004')
            .should('be.visible')
            .and('contain', 'Github')
            .and('contain', 'papitodev')
            .and('contain', 'Ativo');
    });

    it('deve remover uma rede social', () => {
        const name = 'Facebook';
        cy.contains('table tbody tr', '1002')
            .find('.remove-item')
            .click();
        cy.contains('button', 'Excluir')
            .click();
        cy.get('table tbody')
            .should('not.contain', name);
    });

    it('deve permanecer na tabela ao desistir da exclusão', () => {
        const name = 'Youtube';
        cy.contains('table tbody tr', '1005')
            .find('.remove-item')
            .click();
        cy.contains('button', 'Cancelar')
            .click();
        cy.get('table tbody')
            .should('contain', name);
    });
});