describe('Form Input', () => {
    beforeEach(() => {
        cy.loadPage()
    });

    it('Check the first row exists', () => {
        cy.get('body').find('#row-1');
        cy.get('#row-1').find('input').type('text');
        cy.get('#row-1').find('select').first().find('option').first().contains('Type');
    });

    it('Accepts input', () => {
        for (let i = 1; i <= 5; i++) {
            cy.get('#add-row')
                .click();
            cy.get('.form-row').should('have.length', i+1);
        }
    });

    it.only('Fill in sample data', () => {
        const fixtureName = 'form-data';
        cy.fillinFixture(fixtureName);

        cy.get('#generate-btn').click();

        cy.checkFilledinFixtureHeaders(fixtureName);
    })
})