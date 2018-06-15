// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('loadPage', () => {
    cy.server();
    cy.route('GET', 'http://randomdata.info:8081/api/fields')
        .as('loadFields');
    cy.visit('/');
    cy.wait('@loadFields');
});


/**
 * Fill in data. Parameter is a fixture name.
 */
Cypress.Commands.add('fillinFixture', (fixtureName) => {
    cy.fixture(fixtureName)
        .then(formdata => {
            formdata.forEach(function (row, i) {
                cy.get('.form-row:last input[name="fieldName"]').type(row.name);
                cy.get('.form-row:last select[name="fieldType"]').select(row.type);

                if (row.subtype.length > 0) {
                    if (row.textinput) {
                        cy.get('.form-row:last input[name="fieldSubtype"]').type(row.subtype);
                    } else {
                        cy.get('.form-row:last select[name="fieldSubtype"]').select(row.subtype);
                    }

                }
                if (i < formdata.length - 1) {
                    cy.get('#add-row').click();
                }
            });
            cy.get('body').find('.form-row').should('have.length', formdata.length);
        });
});

Cypress.Commands.add('checkFilledinFixtureHeaders', (fixtureName) => {
    cy.fixture(fixtureName)
        .then(formdata => {
            formdata.forEach(function (row, i) {
                cy.get('thead > tr > :nth-child('+(i+1)+')').contains(row.name);
            });
            cy.get('thead > tr > th').should('have.length', formdata.length)
        });
});
