describe('CEP', () => {
    beforeEach(() => {
        cy.goHome();
        cy.doLogin();
        cy.goTo('/cep', 'CEP (API dos Correios)');
    });

    it('Deve cadastrar um endereço consumindo a API dos correios', () => {
        cy.get('input[name="cep"').type('79022080');
        cy.contains('button', 'Cadastrar').click();

        cy.get('input[name="logradouro"]', { timeout: 7000 })
            .should('have.value', 'Rua Alexandre José Lopes Casali');

        cy.get('#cidade', { timeout: 7000 })
            .should('have.value', 'Campo Grande');

        cy.get('input[placeholder="Estado"]', { timeout: 7000 })
            .should('have.value', 'MS');
    });
});