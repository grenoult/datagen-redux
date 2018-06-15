describe('Form submission with error', () => {
    it('Shows an error message for failed loading fields', () => {
        cy.server();
        cy.route({
            method: 'GET',
            url: 'http://randomdata.info:8081/api/fields',
            status: 500,
            response: {}
        }).as('loadFieldError');

        cy.visit('/');

        cy.wait('@loadFieldError');

        cy.get('.form-row').should('have.length', 0);
        cy.get('#add-row').should('have.length', 0);
        cy.get('.alert').contains('Oops, something went wrong!');
    })
});