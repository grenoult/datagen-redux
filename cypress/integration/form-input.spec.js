describe('Form Input', () => {
    const fixtureName = 'form-data';

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

    it('Fill in sample data', () => {
        cy.fillinFixture(fixtureName);

        cy.get('#generate-btn').click();

        cy.checkFilledinFixtureHeaders(fixtureName);
    });

    it.only('Check number of records returns', () => {
        cy.fillinFixture(fixtureName);

        const numbers = [10, 50, 100, 500];

        numbers.forEach(function (number) {
            cy.get('#formResultNumber').select(number.toString());
            cy.get('#generate-btn').click();
            cy.get('tbody tr').should('have.length', number);
        });
    });
})