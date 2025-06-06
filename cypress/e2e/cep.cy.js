describe('CEP', () => {
    beforeEach(() => {
        cy.goHome();
        cy.doLogin();
        cy.goTo('/cep', 'CEP (API dos Correios)');
    });

    it('Deve cadastrar um endereço consumindo a API dos correios', () => {
        const address = {
            cep: "79022080",
            logradouro: "Rua Alexandre José Lopes Casali",
            complemento: "Bairro muito bom",
            unidade: "Não sei",
            bairro: "Vila Giocondo Orsi",
            localidade: "Campo Grande",
            uf: "MS",
            estado: "Mato Grosso do Sul",
            regiao: "Centro-Oeste",
            ibge: "5002704",
            gia: "",
            ddd: "67",
            siafi: "9051"
        }

        cy.intercept('GET', 'https://viacep.com.br/ws/79022080/json/', {
            statusCode: 200,
            body: address
        }).as('getCep');

        cy.get('input[name="cep"').type(address.cep);
        cy.contains('button', 'Cadastrar').click();

        cy.wait('@getCep');

        cy.get('input[name="logradouro"]', { timeout: 7000 })
            .should('have.value', address.logradouro);

        cy.get('#cidade', { timeout: 7000 })
            .should('have.value', address.localidade);

        cy.get('input[placeholder="Estado"]', { timeout: 7000 })
            .should('have.value', address.uf);
    });
});