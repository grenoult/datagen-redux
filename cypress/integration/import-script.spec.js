describe('import-script', () => {
    const fixtureName = 'import-script-user';

    it ('Open Generator link', () => {
        cy.visit('/');
        cy.get('a.nav-link:contains("Import SQL (New!)")').click();
    });

    it ('Fill in script and generate data', () => {
        cy.fixture('import-script-user').then(data => {
            cy.get('#importSqlTextArea').type(data.sqlScriptUser);
            cy.get('#generate-sql-btn').click();
        });
    });

    it ('Checks data', () => {
        cy.get('pre:last').should('contain', 'INSERT INTO user(id, firstname, lastname, address, state, city, postcode, mobile) VALUES');
    });
})