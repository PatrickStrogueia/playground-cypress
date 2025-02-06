describe('upload', () => {
    beforeEach(() => {
        cy.goHome();
        cy.login('papito@cyskills.com.br', 'showtime');
        cy.userLoggedIn();
        cy.goTo('/upload', 'Upload');
    });

    it('deve anexar um doc', () => {
        cy.get('input[name="doc"]')
            .selectFile('cypress/fixtures/doc.pdf')
            .then(element => {
                cy.log(element);
                expect(element[0].files[0].name).to.equal('doc.pdf');
            });
    });

    it.only('deve anexar uma imagem', () => {
        cy.get('input[name="photo"]')
            .selectFile('cypress/fixtures/liga.jpg')
            .then(element => {
                cy.log(element);
                expect(element[0].files[0].name).to.equal('liga.jpg');
            });
        cy.get('#image-upload')
            .find('img')
            .should('be.visible')
            .and('have.attr', 'src')
            .and('include', 'blob');
    });
});