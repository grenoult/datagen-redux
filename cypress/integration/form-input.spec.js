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

        cy.fixture(fixtureName)
            .then(formdata => {
                formdata.forEach(function (row, i) {
                    let type = row.type;
                    let subtype = row.subtype;

                    // cy.get('tbody')
                    //     .find('td:eq('+(i+1)+')')
                    //     .should(($td) => {
                    //         let tds = $td.map((i, el) => {
                    //             return Cypress.$(el).text();
                    //         });
                    //         console.log(tds);
                    //     });

                    // switch (type) {
                    //     case "integer": {
                    //
                    //         break;
                    //     }
                    //     case "firstname": {
                    //
                    //         break;
                    //     }
                    //     case "surname": {
                    //
                    //         break;
                    //     }
                    //     case "street Number": {
                    //
                    //         break;
                    //     }
                    //     case "street": {
                    //
                    //         break;
                    //     }
                    //     case "state": {
                    //
                    //         break;
                    //     }
                    //     case "postcode": {
                    //
                    //         break;
                    //     }
                    //     case "city": {
                    //
                    //         break;
                    //     }
                    //     case "phone": {
                    //
                    //         break;
                    //     }
                    //     case "date": {
                    //
                    //         break;
                    //     }
                    //     case "regex": {
                    //
                    //         break;
                    //     }
                    // }
                    // cy.get('tbody > tr > :nth-child('+(i+1)+')').contains(row.name);
                });
                // cy.get('thead > tr > td').should('have.length', formdata.length)
            });
    })
})